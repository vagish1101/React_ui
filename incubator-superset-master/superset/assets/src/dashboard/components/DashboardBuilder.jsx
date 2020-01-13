/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-env browser */
import cx from 'classnames';
// ParentSize uses resize observer so the dashboard will update size
// when its container size changes, due to e.g., builder side panel opening
import { ParentSize } from '@vx/responsive';
import PropTypes from 'prop-types';
import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { TabContainer, TabContent, TabPane } from 'react-bootstrap';
import $ from "jquery"
import Select from 'react-select';


import BuilderComponentPane from './BuilderComponentPane';
import DashboardHeader from '../containers/DashboardHeader';
import DashboardGrid from '../containers/DashboardGrid';
import IconButton from './IconButton';
import DragDroppable from './dnd/DragDroppable';
import DashboardComponent from '../containers/DashboardComponent';
import ToastPresenter from '../../messageToasts/containers/ToastPresenter';
import WithPopoverMenu from './menu/WithPopoverMenu';

import getDragDropManager from '../util/getDragDropManager';
import findTabIndexByComponentId from '../util/findTabIndexByComponentId';

import customJS from './gridComponents/new/NewKPIHeader.js';
import {
  BUILDER_PANE_TYPE,
  DASHBOARD_GRID_ID,
  DASHBOARD_ROOT_ID,
  DASHBOARD_ROOT_DEPTH,
} from '../util/constants';

const TABS_HEIGHT = 47;
const HEADER_HEIGHT = 67;

const propTypes = {
  // redux
  dashboardLayout: PropTypes.object.isRequired,
  deleteTopLevelTabs: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  showBuilderPane: PropTypes.func.isRequired,
  builderPaneType: PropTypes.string.isRequired,
  setColorSchemeAndUnsavedChanges: PropTypes.func.isRequired,
  colorScheme: PropTypes.string,
  handleComponentDrop: PropTypes.func.isRequired,
  toggleBuilderPane: PropTypes.func.isRequired,
  directPathToChild: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  showBuilderPane: false,
  directPathToChild: [],
  colorScheme: undefined,
};

class DashboardBuilder extends React.Component {
  static shouldFocusTabs(event, container) {
    // don't focus the tabs when we click on a tab
    return (
      event.target.tagName === 'UL' ||
      (/icon-button/.test(event.target.className) &&
        container.contains(event.target))
    );
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    const { dashboardLayout, directPathToChild } = props;
    const dashboardRoot = dashboardLayout[DASHBOARD_ROOT_ID];
    const rootChildId = dashboardRoot.children[0];
    const tabIndex = findTabIndexByComponentId({
      currentComponent:
        rootChildId === DASHBOARD_GRID_ID
          ? dashboardLayout[DASHBOARD_ROOT_ID]
          : dashboardLayout[rootChildId],
      directPathToChild,
    });

    this.state = {
      tabIndex,
      selectedOption: null,
      autoselect: true
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleDeleteTopLevelTabs = this.handleDeleteTopLevelTabs.bind(this);
    this.options = [];

  }

  getChildContext() {
    return {
      dragDropManager: this.context.dragDropManager || getDragDropManager(),
    };
  }

  handleDeleteTopLevelTabs() {
    this.props.deleteTopLevelTabs();
    this.setState({ tabIndex: 0 });
  }

  handleChangeTab({ tabIndex }) {
    this.setState(() => ({ tabIndex }));
    setTimeout(() => {
      if (window)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }, 100);
    setTimeout(() => {
      this.options = [];
      $('.nav-tabs li:visible').each( (i, li) => { 
        if (!($(this)[0].className == '-more')) { 
          this.options.push({
            value:  $(li).find('input').val(),
            label:$(li).find('input').val()
          })
          
        }
      })
      $('.nav-tabs li.-more:visible').each( (i, li) => { 
     
          this.options.push({
            value:  $(li).find('li input').val(),
            label:$(li).find('li input').val()
          })
          
        
      })

      this.setState({autoselect: true});

    }, 2000);
  }
  componentDidMount () {
    window.addEventListener('click', this.handleLoad);
  }
  handleLoad () {
 
    // setTimeout(function(){  
    //   console.log('loaded customJS')
    //   let color = ['#45aef1', '#46be8a', '#f96868' , '#fb8c00']
    //   var classes = document.querySelectorAll('.big_number_total');
  
    //   [].forEach.call(classes, function(kpi , i) {
    //       kpi.closest('.dashboard-component-chart-holder').style.background = color[i];
    //       kpi.closest('.dashboard-component-chart-holder').querySelector('.header').style.color = 'white'
    //       //kpi.closest('.dashboard-component-chart-holder').style.transform  = "scale(0.8)";
    //       kpi.closest('.dashboard-component-chart-holder').querySelector('.chart-header').style.background = 'transparent';
    //       kpi.closest('.dashboard-component-chart-holder').querySelector('.slice-header-controls-trigger').style.display = 'none';
    //   });
  
  
    //   // Prompt
  
    //   var classesPrmt = document.querySelectorAll('.filter_box');
  
    //   [].forEach.call(classesPrmt, function(kprmpt , i) {
    //     kprmpt.closest('.dashboard-component-chart-holder').querySelector('.slice-header-controls-trigger').style.display = 'none';
    //      // kprmpt.closest('.dashboard-component-chart-holder').style.background = 'linear-gradient(103deg,#a679ac 7%,#e26335 99%)';
    //       //kprmpt.closest('.dashboard-component-chart-holder').querySelector('.chart-header').style.background = 'transparent'
    //   });
  
    //   // Hide empty section
    //   var emptys = document.querySelectorAll('.grid-column--empty');
    //   [].forEach.call(emptys, function(empty , i) {
    //       empty.closest('.dragdroppable-column').style.visibility = 'hidden' ;
        
    //   }); }, 3000);
  }
  render() {
    const { selectedOption } = this.state;

    const {
      handleComponentDrop,
      dashboardLayout,
      editMode,
      showBuilderPane,
      builderPaneType,
      setColorSchemeAndUnsavedChanges,
      colorScheme,
    } = this.props;
    const { tabIndex } = this.state;
    const dashboardRoot = dashboardLayout[DASHBOARD_ROOT_ID];
    const rootChildId = dashboardRoot.children[0];
    const topLevelTabs =
      rootChildId !== DASHBOARD_GRID_ID && dashboardLayout[rootChildId];

    const childIds = topLevelTabs ? topLevelTabs.children : [DASHBOARD_GRID_ID];

    return (
      <div>
      <StickyContainer
        className={cx('dashboard', editMode && 'dashboard--editing')}
      >
        <Sticky>
          {({ style }) => (
            <DragDroppable
              component={dashboardRoot}
              parentComponent={null}
              depth={DASHBOARD_ROOT_DEPTH}
              index={0}
              orientation="column"
              onDrop={handleComponentDrop}
              editMode={editMode}
              // you cannot drop on/displace tabs if they already exist
              disableDragdrop={!!topLevelTabs}
              style={{ zIndex: 100, ...style }}
            >
              {({ dropIndicatorProps }) => (
                <div>
                  <DashboardHeader />
                  {dropIndicatorProps && <div {...dropIndicatorProps} />}
                  {topLevelTabs && (
                    <WithPopoverMenu
                      shouldFocus={DashboardBuilder.shouldFocusTabs}
                      menuItems={[
                        <IconButton
                          className="fa fa-level-down"
                          label="Collapse tab content"
                          onClick={this.handleDeleteTopLevelTabs}
                        />,
                      ]}
                      editMode={editMode}
                    >
                      <DashboardComponent
                        id={topLevelTabs.id}
                        parentId={DASHBOARD_ROOT_ID}
                        depth={DASHBOARD_ROOT_DEPTH + 1}
                        index={0}
                        renderTabContent={false}
                        renderHoverMenu={false}
                        onChangeTab={this.handleChangeTab}
                      />
                    </WithPopoverMenu>
                  )}
                </div>
              )}
            </DragDroppable>
          )}
        </Sticky>

        <div className="dashboard-content">
          <div className="grid-container">
            <ParentSize>
              {({ width }) => (
                /*
                  We use a TabContainer irrespective of whether top-level tabs exist to maintain
                  a consistent React component tree. This avoids expensive mounts/unmounts of
                  the entire dashboard upon adding/removing top-level tabs, which would otherwise
                  happen because of React's diffing algorithm
                */
                <TabContainer
                  id={DASHBOARD_GRID_ID}
                  activeKey={Math.min(tabIndex, childIds.length - 1)}
                  onSelect={this.handleChangeTab}
                  animation
                  mountOnEnter
                  unmountOnExit={false}
                >
                  <TabContent>
                   
                    {childIds.map((id, index) => (
                      // Matching the key of the first TabPane irrespective of topLevelTabs
                      // lets us keep the same React component tree when !!topLevelTabs changes.
                      // This avoids expensive mounts/unmounts of the entire dashboard.
                      <TabPane
                        key={index === 0 ? DASHBOARD_GRID_ID : id}
                        eventKey={index}
                      >
                        <DashboardGrid
                          gridComponent={dashboardLayout[id]}
                          // see isValidChild for why tabs do not increment the depth of their children
                          depth={DASHBOARD_ROOT_DEPTH + 1} // (topLevelTabs ? 0 : 1)}
                          width={width}
                          isComponentVisible={index === tabIndex}
                        />
                      </TabPane>
                    ))}
                  </TabContent>
                </TabContainer>
              )}
            </ParentSize>
          </div>
          {editMode && builderPaneType !== BUILDER_PANE_TYPE.NONE && (
            <BuilderComponentPane
              topOffset={HEADER_HEIGHT + (topLevelTabs ? TABS_HEIGHT : 0)}
              showBuilderPane={showBuilderPane}
              builderPaneType={builderPaneType}
              setColorSchemeAndUnsavedChanges={setColorSchemeAndUnsavedChanges}
              colorScheme={colorScheme}
            />
          )}
        </div>
        <ToastPresenter />
      </StickyContainer>
      {<Select
        value={selectedOption}
        isDisabled  ={false}
        onChange={this.handleChange}
        options={this.options}
      /> }
    
      </div>
    );
  }
}

DashboardBuilder.propTypes = propTypes;
DashboardBuilder.defaultProps = defaultProps;
DashboardBuilder.childContextTypes = {
  dragDropManager: PropTypes.object.isRequired,
};
window.addEventListener("DOMContentLoaded", function(event) { 
  console.log('DOM fully loaded and parsed');
  customJS();
  console.log('DOM fully loaded and parsed ended');
})
export default DashboardBuilder;
