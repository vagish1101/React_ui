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
import dompurify from 'dompurify';
import { snakeCase } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery'
import { SuperChart } from '@superset-ui/chart';
import { Tooltip } from 'react-bootstrap';
import { Logger, LOG_ACTIONS_RENDER_CHART } from '../logger/LogUtils';

const propTypes = {
  annotationData: PropTypes.object,
  actions: PropTypes.object,
  chartId: PropTypes.number.isRequired,
  datasource: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  formData: PropTypes.object.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  setControlValue: PropTypes.func,
  vizType: PropTypes.string.isRequired,
  triggerRender: PropTypes.bool,
  // state
  chartAlert: PropTypes.string,
  chartStatus: PropTypes.string,
  queryResponse: PropTypes.object,
  triggerQuery: PropTypes.bool,
  refreshOverlayVisible: PropTypes.bool,
  // dashboard callbacks
  addFilter: PropTypes.func,
};

const BLANK = {};

const defaultProps = {
  addFilter: () => BLANK,
  initialValues: BLANK,
  setControlValue() {},
  triggerRender: false,
};

class ChartRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.hasQueryResponseChange = false;
    this.directed_force = [];
    this.directed_flag = true

    this.setTooltip = this.setTooltip.bind(this);
    this.handleAddFilter = this.handleAddFilter.bind(this);
    this.handleRenderSuccess = this.handleRenderSuccess.bind(this);
    this.handleRenderFailure = this.handleRenderFailure.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const resultsReady =
      nextProps.queryResponse &&
      ['success', 'rendered'].indexOf(nextProps.chartStatus) > -1 &&
      !nextProps.queryResponse.error &&
      !nextProps.refreshOverlayVisible;

    if (resultsReady) {
      this.hasQueryResponseChange =
        nextProps.queryResponse !== this.props.queryResponse;

      if (this.hasQueryResponseChange ||
        nextProps.annotationData !== this.props.annotationData ||
        nextProps.height !== this.props.height ||
        nextProps.width !== this.props.width ||
        nextState.tooltip !== this.state.tooltip ||
        nextProps.triggerRender ||
        nextProps.formData.color_scheme !== this.props.formData.color_scheme) {
        return true;
      }
    }
    return false;
  }

  setTooltip(tooltip) {
    this.setState({ tooltip });
  }

  handleAddFilter(col, vals, merge = true, refresh = true) {
    this.props.addFilter(col, vals, merge, refresh);
  }

  handleRenderSuccess() {
    const { actions, chartStatus, chartId, vizType } = this.props;
    if (['loading', 'rendered'].indexOf(chartStatus) < 0) {
      actions.chartRenderingSucceeded(chartId);
    }

    // only log chart render time which is triggered by query results change
    // currently we don't log chart re-render time, like window resize etc
    if (this.hasQueryResponseChange) {
      actions.logEvent(LOG_ACTIONS_RENDER_CHART, {
        slice_id: chartId,
        viz_type: vizType,
        start_offset: this.renderStartTime,
        ts: new Date().getTime(),
        duration: Logger.getTimestamp() - this.renderStartTime,
      });
    }
   
    // document.querySelector('.filter_box').closest(".resizable-container").querySelector('.chart-header').style.display = 'none'
  }

  handleRenderFailure(error, info) {
    const { actions, chartId } = this.props;
    console.warn(error); // eslint-disable-line
    actions.chartRenderingFailed(error.toString(), chartId, info ? info.componentStack : null);

    // only trigger render log when query is changed
    if (this.hasQueryResponseChange) {
      actions.logEvent(LOG_ACTIONS_RENDER_CHART, {
        slice_id: chartId,
        has_err: true,
        error_details: error.toString(),
        start_offset: this.renderStartTime,
        ts: new Date().getTime(),
        duration: Logger.getTimestamp() - this.renderStartTime,
      });
    }
  }

  renderTooltip() {
    const { tooltip } = this.state;
    if (tooltip && tooltip.content) {
      return (
        <Tooltip
          className="chart-tooltip"
          id="chart-tooltip"
          placement="right"
          positionTop={tooltip.y + 30}
          positionLeft={tooltip.x + 30}
          arrowOffsetTop={10}
        >
          {typeof (tooltip.content) === 'string' ?
            <div // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: dompurify.sanitize(tooltip.content) }}
            />
            : tooltip.content
          }
        </Tooltip>
      );
    }
    return null;
  }
  componentWillUpdate () {
    setTimeout(function(){
      $('.superset-legacy-chart-nvd3-pie svg').each(function (index, value) {
        var svg = $(this)[0]
        var bbox = svg.getBBox();
          svg.setAttribute("viewBox", (bbox.x-50)+" "+(bbox.y)+" "+(bbox.width+50)+" "+(bbox.height));
        });
        $('.superset-legacy-chart-heatmap svg').each(function (index, value) { 

          var svg = $(this)[0];
          $(this).closest('.superset-legacy-chart-heatmap').find('canvas').css({left: 0 , top: 0})
          $(this).closest('.superset-legacy-chart-heatmap').width($(this).width());
          var canvasHeight =  $(this).find(".background-rect")[0].getBoundingClientRect().height;
          var canvasWidth =  $(this).find(".background-rect")[0].getBoundingClientRect().width;
          var left =  $(this).find(".background-rect").offset().left - $(this).closest('.superset-legacy-chart-heatmap').find('canvas').offset().left;
          var top =  $(this).find(".background-rect").offset().top - $(this).closest('.superset-legacy-chart-heatmap').find('canvas').offset().top;
          $(this).closest('.superset-legacy-chart-heatmap').find('canvas').css({left: left , top: top, height: canvasHeight, width: canvasWidth})
          var bbox = svg.getBBox();
            svg.setAttribute("viewBox", (bbox.x   )+" "+(bbox.y)+" "+(bbox.width )+" "+(bbox.height));
          });
  
          $('.superset-legacy-chart-heatmap svg').each(function (index, value) { 
  
            var svg = $(this)[0];
            $(this).closest('.superset-legacy-chart-heatmap').find('canvas').css({left: 0 , top: 0})
            $(this).closest('.superset-legacy-chart-heatmap').width($(this).width());
            var canvasHeight =  $(this).find(".background-rect")[0].getBoundingClientRect().height;
            var canvasWidth =  $(this).find(".background-rect")[0].getBoundingClientRect().width;
            var left =  $(this).find(".background-rect").offset().left - $(this).closest('.superset-legacy-chart-heatmap').find('canvas').offset().left;
            var top =  $(this).find(".background-rect").offset().top - $(this).closest('.superset-legacy-chart-heatmap').find('canvas').offset().top;
            $(this).closest('.superset-legacy-chart-heatmap').find('canvas').css({left: left , top: top, height: canvasHeight, width: canvasWidth})
            var bbox = svg.getBBox();
              svg.setAttribute("viewBox", (bbox.x   )+" "+(bbox.y)+" "+(bbox.width )+" "+(bbox.height));
            });
    
        $('.superset-legacy-chart-nvd3-dist-bar svg').each(function (index, value) {
          var svg = $(this)[0]
          var bbox = svg.getBBox();
            svg.setAttribute("viewBox", (bbox.x-10)+" "+(bbox.y)+" "+(bbox.width+20)+" "+(bbox.height));
          });
    
      }, 2000);
  }

  render() {
    const {
      chartAlert,
      chartStatus,
      vizType,
      chartId,
    } = this.props;

    // Skip chart rendering
    if (chartStatus === 'loading' || !!chartAlert || chartStatus === null) {
      return null;
    }

    this.renderStartTime = Logger.getTimestamp();
   

    let {
      width,
      height,
      annotationData,
      datasource,
      initialValues,
      formData,
      queryResponse,
      setControlValue,
    } = this.props;

    
    if ( vizType === 'directed_force') {
      // if(this.directed_force.length == 0){
      //   this.directed_force = queryResponse.data;
      // }
      if(queryResponse.data[0].source.name == '[object Object]')  {
         queryResponse.data.forEach( (obj, index) => {
      //    queryResponse.data[index].source =  Object.assign({}, this.directed_force[index].source.name) ;
      //    queryResponse.data[index].target =  Object.assign({}, this.directed_force[index].target.name);
       });
      } 
      if(this.directed_flag) {

        localStorage.setItem('directed_force', JSON.stringify(queryResponse.data));
      }
      queryResponse.data =  JSON.parse(localStorage.getItem('directed_force'));
      this.directed_flag = false;
     }
    
    if ( document.documentElement.clientWidth <= 768 ) {
        width = document.documentElement.clientWidth;
        //datasource.width = document.documentElement.clientWidth;
    }
    
    return (
      <React.Fragment>
        {this.renderTooltip()}
        <SuperChart
            id={`chart-id-${chartId}`}
            className={`${snakeCase(vizType)}`}
            chartType={vizType}
            width={width}
            height={height}
            annotationData={annotationData}
            datasource={datasource}
            filters={initialValues}
            formData={formData}
            payload={queryResponse}
            onAddFilter={this.handleAddFilter}
            onError={this.handleRenderFailure}
            setControlValue={setControlValue}
            setTooltip={this.setTooltip}
            onRenderSuccess={this.handleRenderSuccess}
            onRenderFailure={this.handleRenderFailure}
          />
      </React.Fragment>
    );
  }
}

ChartRenderer.propTypes = propTypes;
ChartRenderer.defaultProps = defaultProps;

export default ChartRenderer;
