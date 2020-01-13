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
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dropdown, MenuItem } from 'react-bootstrap';
import { t } from '@superset-ui/translation';
import URLShortLinkModal from '../../components/URLShortLinkModal';
import getDashboardUrl from '../util/getDashboardUrl';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import $ from "jquery";
import htmlToImage from 'html-to-image';


import '../../../stylesheets/xpo_custom.css';

const propTypes = {
  slice: PropTypes.object.isRequired,
  componentId: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  addDangerToast: PropTypes.func.isRequired,
  isCached: PropTypes.bool,
  isExpanded: PropTypes.bool,
  cachedDttm: PropTypes.string,
  updatedDttm: PropTypes.number,
  supersetCanExplore: PropTypes.bool,
  supersetCanCSV: PropTypes.bool,
  sliceCanEdit: PropTypes.bool,
  toggleExpandSlice: PropTypes.func,
  forceRefresh: PropTypes.func,
  exploreChart: PropTypes.func,
  exportCSV: PropTypes.func,
};

const defaultProps = {
  forceRefresh: () => ({}),
  toggleExpandSlice: () => ({}),
  exploreChart: () => ({}),
  exportCSV: () => ({}),
  cachedDttm: null,
  updatedDttm: null,
  isCached: false,
  isExpanded: false,
  supersetCanExplore: false,
  supersetCanCSV: false,
  sliceCanEdit: false,
};

const VerticalDotsTrigger = () => (
  <div className="vertical-dots-container">
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>
);

class SliceHeaderControls extends React.PureComponent {
  constructor(props) {
    super(props);
    this.exportCSV = this.exportCSV.bind(this);
    this.exploreChart = this.exploreChart.bind(this);
    this.toggleControls = this.toggleControls.bind(this);
    this.refreshChart = this.refreshChart.bind(this);
    this.toggleExpandSlice = this.props.toggleExpandSlice.bind(
      this,
      this.props.slice.slice_id,
    );

    this.state = {
      showControls: false,
    };
  }

  exportCSV() {
    this.props.exportCSV(this.props.slice.slice_id);
  }

  exploreChart() {
    this.props.exploreChart(this.props.slice.slice_id);
  }

  refreshChart() {
    if (this.props.updatedDttm) {
      this.props.forceRefresh(this.props.slice.slice_id);
    }
  }

  toggleControls() {
    this.setState({
      showControls: !this.state.showControls,
    });
  }

  downloadChartImage(ev){
    $('.nvd3').find('.nv-point-paths path').css({fill: '#eee', fillOpacity: 0});
    $('.nvd3').find('.nv-background').css({fill: '#eee', fillOpacity: 0});
    $('svg').find('.background-rect').css({fill: '#eee', fillOpacity: 0});
    $('.superset-legacy-chart-chord').find('path.chord').css({stroke: '#eee'});
    $('.superset-legacy-chart-sankey').find('.link').css({fill: 'none', stroke: '#000',strokeOpacity: '.2'});

    if($('.imagesvg').length == 0) {
    // var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.min.js";
    //   $("head").prepend(s);
    var svg = $(ev.target).closest('.dragdroppable').find('svg')[0];
    if (svg !== undefined) {
        $('<img class="imagesvg"/>').prependTo($(ev.target).closest('.dragdroppable'));   
        var graphWidth = $(ev.target).closest('.dragdroppable-column').width();
        var graphHeight = $(ev.target).closest('.dragdroppable-column').height()
        if ($(ev.target).closest('.dragdroppable').find('canvas').length > 0) {
          htmlToImage.toPng($(ev.target).closest('.dragdroppable')[0])
          .then(function (dataUrl) {
            var link = document.createElement("a");
            var doc = new jsPDF('p', 'pt', 'a4');
            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            if (graphWidth <  width){
              width = graphWidth;
              height = graphHeight;
            }
            

            doc.addImage(dataUrl, 'JPEG', 10, 10, width-20, height);
            doc.save($(".imagesvg").closest('.dragdroppable').find('.editable-title input').val() + '.pdf');
          });
  
        } else {
          var graphWidth = $(ev.target).closest('.dragdroppable-column').width();
          var graphHeight = $(ev.target).closest('.dragdroppable-column').height()
          htmlToImage.toPng($(ev.target).closest('.dragdroppable')[0])
          .then(function (dataUrl) {
            var link = document.createElement("a");
            var doc = new jsPDF('p', 'pt', 'a4');
            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            if (graphWidth <  width){
              width = graphWidth;
              height = graphHeight;
            } else {
              height = graphHeight;
            }

            doc.addImage(dataUrl, 'JPEG', 10, 10, width-20, height);
            doc.save($(".imagesvg").closest('.dragdroppable').find('.editable-title input').val() + '.pdf');
            $('.imagesvg').remove();
          });
      // var img = document.querySelector('.imagesvg');
      // //var canvas = document.querySelector('canvas');
      
      // // get svg data
      // var xml = new XMLSerializer().serializeToString(svg);
      
      // // make it base64
      // var svg64 = btoa(xml);
      // var b64Start = 'data:image/svg+xml;base64,';
      
      // // prepend a "header"
      // var image64 = b64Start + svg64;
      
      // // set it as the source of the img element
      // img.src = image64;
      
      // // draw the image onto the canvas
      // //canvas.getContext('2d').drawImage(img, 0, 0);
      
      // // get svg data
      // var xml = new XMLSerializer().serializeToString(svg);
      
      // // make it base64
      // var svg64 = btoa(xml);
      // var b64Start = 'data:image/svg+xml;base64,';
      
      // // prepend a "header"
      // var image64 = b64Start + svg64;
      
      // // set it as the source of the img element
      // img.src = image64;
      
      // // draw the image onto the canvas
      // var imgData;
      // var downImg = $('.imagesvg');
      // $(window).scrollTop(0);
      // setTimeout(function(){ 
      //  $(window).scrollTop(0);
      //  html2canvas($('.imagesvg')[0]).then(canvas => {
      //   $('.imagesvg').addClass('hide')
      //     canvas.getContext('2d');
      //     imgData =  canvas.toDataURL("image/jpeg", 1.0);;
      //     var doc = new jsPDF('p', 'pt', 'a4');
      //     doc.addImage(imgData, 'JPEG', 10, 10);
      //     doc.save($(".imagesvg").closest('.dragdroppable').find('.editable-title input').val() + '.pdf');
      //     $('.imagesvg').remove();
      //  });
 
      //  }, 1000);
      //  $(window).scrollTop(0);
        }
      
    } else {
      var imgData
      var HTML_Width =   $(ev.target).closest('.dragdroppable').find('table')[1].clientWidth;
      var HTML_Height =   $(ev.target).closest('.dragdroppable').find('table')[1].clientHeight;
      var top_left_margin = 15;
      var PDF_Width = HTML_Width+(top_left_margin*2);
      var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;
      var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
      var filname = $(ev.target).closest('.dragdroppable').find('.editable-title input').val();
      var txt2 = $('<table class="tablepdf"></table>');   // Create with jQuery
      $("body").append(txt2); 
      $( $(ev.target).closest('.dragdroppable').find('table thead')[0] ).clone().appendTo( ".tablepdf" );
      $( $($(ev.target).closest('.dragdroppable').find('table')[1]).find('tbody') ).clone().appendTo( ".tablepdf" );
      html2canvas($(".tablepdf")[0]).then(function (canvas) {
        canvas.getContext('2d');
        $('.tablepdf').css('display', 'none');
        console.log(canvas.height+"  "+canvas.width);
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
          pdf.addPage(PDF_Width, PDF_Height);
          pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save(filname + '.pdf');
        
      });
      $('.tablepdf').remove();
        
    }

  }
    //  html2canvas(downImg, {
    //    allowTaint : true
        //  onrendered: function (canvas) {
        //      imgData = canvas.toDataURL(
        //         'image/png');
        //      var doc = new jsPDF('p', 'pt', 'a4');
        //      doc.addImage(imgData, 'PNG', 10, 10);
        //      doc.save('sample-file.pdf');
        //      //setTimeout(function () { window.open(imgData) }, 1000);
    //     //  }
    //  }); 
  
     
  
}

  render() {
    const {
      slice,
      isCached,
      cachedDttm,
      updatedDttm,
      filters,
      componentId,
      addDangerToast,
    } = this.props;
    const cachedWhen = moment.utc(cachedDttm).fromNow();
    const updatedWhen = updatedDttm ? moment.utc(updatedDttm).fromNow() : '';
    const refreshTooltip = isCached
      ? t('Cached %s', cachedWhen)
      : (updatedWhen && t('Fetched %s', updatedWhen)) || '';

    return (
      <Dropdown
        id={`slice_${slice.slice_id}-controls`}
        pullRight
        // react-bootstrap handles visibility, but call toggle to force a re-render
        // and update the fetched/cached timestamps
        onToggle={this.toggleControls}
      >
        <Dropdown.Toggle className="slice-header-controls-trigger" noCaret>
          <VerticalDotsTrigger />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <MenuItem onClick={this.refreshChart} disabled={!updatedDttm}>
            {t('Force refresh')}
            <div className="refresh-tooltip">{refreshTooltip}</div>
          </MenuItem>

          <MenuItem divider />

          {slice.description && (
            <MenuItem onClick={this.toggleExpandSlice}>
              {t('Toggle chart description')}
            </MenuItem>
          )}

          {this.props.sliceCanEdit && (
            <MenuItem href={slice.edit_url} target="_blank">
              {t('Edit chart metadata')}
            </MenuItem>
          )}

          {this.props.supersetCanCSV && (
            <MenuItem onClick={this.exportCSV}>{t('Export CSV')}</MenuItem>
          )}

          {this.props.supersetCanExplore && (
            <MenuItem onClick={this.exploreChart}>
              {t('Explore chart')}
            </MenuItem>
          )}
           <MenuItem>
              {t('Dashboard Emails')}
            </MenuItem>
           
          <URLShortLinkModal
            url={getDashboardUrl(
              window.location.pathname,
              filters,
              componentId,
            )}
            addDangerToast={addDangerToast}
            isMenuItem
            title={t('Share chart')}
            triggerNode={<span>{t('Share chart')}</span>}
          />
           <MenuItem >
              {t('Chart Email Schedules')}
            </MenuItem>
          <MenuItem onClick={this.downloadChartImage}>
            {t('Export PDF')}
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

SliceHeaderControls.propTypes = propTypes;
SliceHeaderControls.defaultProps = defaultProps;

export default SliceHeaderControls;