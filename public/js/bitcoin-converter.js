var MP_INP_BTC_6rDs,MP_INP_CRS_2Tsp;if(window.addEventListener){window.addEventListener('load',function(){MiningProfitConverter.MP_start_live_conv();});}else{window.attachEvent('onload',function(){MiningProfitConverter.MP_start_live_conv();});}
var MiningProfitConverter={count_btc:'1',height_cvr:44,bg_color:'#cd1f25',bg_format:'light',scale:1,api_url:'https://mining-profit.com/api/bitcoinprice',first_time:1,stand_height:44,stand_font_size:21,one_btc_price:0,flow_straight:true,price:'0',MP_start_live_conv:function(){MP_INP_BTC_6rDs=document.getElementById('mining_profit_crypt_conv').getElementsByClassName('val_btc').item(0);MP_INP_CRS_2Tsp=document.getElementById('mining_profit_crypt_conv').getElementsByClassName('val_course').item(0);MiningProfitConverter.sendRequest();setInterval(function(){MiningProfitConverter.sendRequest()},1000*60);MP_INP_BTC_6rDs.onkeydown=MP_INP_BTC_6rDs.onkeyup=function(){MiningProfitConverter.changeBTC();};MP_INP_CRS_2Tsp.onkeydown=MP_INP_CRS_2Tsp.onkeyup=function(){MiningProfitConverter.changePrice();};},setStartCountBTC:function(user_count){var b_c=user_count?user_count:'1';this.count_btc=String(b_c);},setCustomHeightConv:function(user_height){var h_c=user_height?user_height:44;this.height_cvr=parseInt(h_c);},setCustomColorConv:function(user_color){var bg_c=user_color?user_color:'#cd1f25';bg_c=String(bg_c);var l_bg_c=bg_c.length;if(bg_c.indexOf('#')+1){if(l_bg_c==7||l_bg_c==4){this.bg_color=bg_c;}}
else{this.bg_color=bg_c;}},setFormatContainerBackground:function(user_format){var bg_f=user_format?user_format:'light';if(bg_f=='light'||bg_f=='dark'){this.bg_format=bg_f;}},draw:function(){this.scale=this.height_cvr/this.stand_height;var f_s=this.stand_font_size*this.scale;var bord_span='border:none;',span_l_h,input_l_h=this.height_cvr,bord_inp='border:none;',color_equal;if(this.bg_format=='dark'){bord_span='border: 1px solid #fff;';span_l_h=this.height_cvr;this.height_cvr-=2;color_equal='color:#fff;';}
else{span_l_h=this.height_cvr- 2;bord_inp='border:1px solid '+this.bg_color+';';color_equal='color:'+this.bg_color+';';}
document.write(''+'<style>'+'#mining_profit_crypt_conv span, #mining_profit_crypt_conv input{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0;vertical-align:top;}'+'#mining_profit_crypt_conv .cr-label{padding:0 6px;background-color:'+this.bg_color+';color:#fff;font-size:'+f_s+'px;font-weight:400;'+'margin-left:5px;'+bord_span+'line-height:'+this.height_cvr+'px;position:relative;font-family:Helvetica;}'+'#mining_profit_crypt_conv .val-crypt{text-align:center; padding:0 '+8*this.scale+'px;color:'+this.bg_color+';line-height:'+span_l_h+'px;'+'font-weight:700;font-size:'+f_s+'px;font-family:Helvetica;'+bord_inp+'height:'+input_l_h+'px;}'+'#mining_profit_crypt_conv .crypt-side{padding-bottom: 3px; vertical-align:top;}'+'#mining_profit_crypt_conv .equal-course{padding:0 5px;font-size:'+f_s+'px;'+color_equal+'vertical-align:top;line-height:'+span_l_h+'px;}'+'#mining_profit_crypt_conv .dis-inl{display:inline-block;}'+'#mining_profit_crypt_conv .val_btc{width:'+28*this.scale+'px;}'+'#mining_profit_crypt_conv .val_course{width:'+60*this.scale+'px;}'+'#mining_profit_crypt_conv .mp-conv-powered{display: block; position: absolute; top: 0; right: 0; cursor: pointer;}'+'#mining_profit_crypt_conv .mp-conv-powered img{display: block;}'+'</style>');document.write(''+'<div id="mining_profit_crypt_conv">'+'<span class="crypt-side dis-inl">'+'<input class="val_btc val-crypt" type="text" value="-"/><span class="cr-label dis-inl">BTC</span>'+'</span>'+'<span class="equal-course">=</span>'+'<span class="course-side dis-inl">'+'<input class="val_course val-crypt" type="text" value="---" /><span class="cr-label dis-inl">'+'USD<a class="mp-conv-powered" target="_top"</a></span>'+'</span>'+'</div>');this.trackConvertor();},updateCustomHeightConv:function(new_height){var new_h_c=new_height?parseInt(new_height):this.height_cvr;if(new_h_c!=this.height_cvr){this.height_cvr=new_h_c;this.updateScaleConv();}},updateScaleConv:function(){this.scale=this.height_cvr/this.stand_height;var f_s=this.stand_font_size*this.scale;var span_l_h;if(this.bg_format=='dark'){span_l_h=this.height_cvr;this.height_cvr-=2;}
else{span_l_h=this.height_cvr- 2;}
MP_INP_BTC_6rDs.style.paddingLeft=MP_INP_BTC_6rDs.style.paddingRight=MP_INP_CRS_2Tsp.style.paddingLeft=MP_INP_CRS_2Tsp.style.paddingRight=8*this.scale+'px';var cr_label_left=document.getElementById('mining_profit_crypt_conv').getElementsByClassName('cr-label').item(0);var cr_label_right=document.getElementById('mining_profit_crypt_conv').getElementsByClassName('cr-label').item(1);var cr_equal=document.getElementById('mining_profit_crypt_conv').getElementsByClassName('equal-course').item(0);cr_label_left.style.fontSize=cr_label_right.style.fontSize=MP_INP_BTC_6rDs.style.fontSize=MP_INP_CRS_2Tsp.style.fontSize=cr_equal.style.fontSize=f_s+'px';MP_INP_BTC_6rDs.style.lineHeight=MP_INP_CRS_2Tsp.style.lineHeight=cr_label_left.style.lineHeight=cr_label_right.style.lineHeight=cr_equal.style.lineHeight=span_l_h+'px';MP_INP_BTC_6rDs.style.height=MP_INP_CRS_2Tsp.style.height=span_l_h+'px';this.resizeInput(MP_INP_BTC_6rDs,this.count_btc);this.resizeInput(MP_INP_CRS_2Tsp,this.price);},sendRequest:function(){var req=new XMLHttpRequest;req.open('GET',this.api_url,true);req.onload=this.handleRequest.bind(this);req.send(null);},handleRequest:function(e){var jsonResponse=JSON.parse(e.target.responseText);var new_one_btc_price=parseFloat(jsonResponse.last_price_BTCUSD);if(new_one_btc_price!=this.one_btc_price){this.one_btc_price=new_one_btc_price;if(this.first_time){this.price=this.cutZero((this.one_btc_price*parseFloat(this.count_btc)).toFixed(2));this.resizeBTC();this.resizePrice();this.first_time=0;}
else{if(this.flow_straight){this.updatePrice();}
else{this.updateBTC();}}}},updatePrice:function(){if(this.count_btc!=''){this.price=this.cutZero((this.one_btc_price*parseFloat(this.count_btc)).toFixed(2));}
else{this.price='';}
this.resizePrice();},updateBTC:function(){if(this.price!=''){this.count_btc=this.cutZero((parseFloat(this.price)/this.one_btc_price).toFixed(2));
}
else{this.count_btc='';}
this.resizeBTC();},cutZero:function(work_s){if(work_s.indexOf('.')+ 1){var seek_zero_end=work_s.length-1;while(work_s[seek_zero_end]!='.'){if(work_s[seek_zero_end]=='0'){seek_zero_end-=1;}
else{break;}}
if(seek_zero_end!=work_s.length-1){if(work_s[seek_zero_end]=='.'){return work_s.substring(0,seek_zero_end);}
else{return work_s.substring(0,seek_zero_end+1);}}}
return work_s;},changeBTC:function(){var new_btc_count=MP_INP_BTC_6rDs.value;this.resizeInput(MP_INP_BTC_6rDs,new_btc_count);var buff=new_btc_count.replace(/[^\d\.]/g,'');if(buff!=this.count_btc){this.count_btc=buff;this.flow_straight=true;this.updatePrice();}
else if(buff!=new_btc_count){MP_INP_BTC_6rDs.value=this.count_btc;this.resizeInput(MP_INP_BTC_6rDs,this.count_btc);}},changePrice:function(){var new_btc_price=MP_INP_CRS_2Tsp.value;this.resizeInput(MP_INP_CRS_2Tsp,new_btc_price);var buff=new_btc_price.replace(/[^\d\.]/g,'');if(buff!=this.price){this.price=buff;this.flow_straight=false;this.updateBTC();}
else if(buff!=new_btc_price){MP_INP_CRS_2Tsp.value=this.price;this.resizeInput(MP_INP_CRS_2Tsp,this.price);}},resizeInput:function(el,value){var point_width=0;var is_point=0;if(value.indexOf('.')+ 1){point_width=8;is_point=1;}
var width_inp=((value.length-is_point+ 1.5)*12+ point_width+ 16)*this.scale+ 2;var incr_width=el.offsetWidth;var step=(width_inp- incr_width)/10;
var i=1;var go_resize=setInterval(function(){incr_width+=step;el.style.width=incr_width+'px';if(i==10){clearInterval(go_resize);}
i+=1;},5);},resizePrice:function(){this.resizeInput(MP_INP_CRS_2Tsp,this.price);MP_INP_CRS_2Tsp.value=this.price;},resizeBTC:function(){this.resizeInput(MP_INP_BTC_6rDs,this.count_btc);MP_INP_BTC_6rDs.value=this.count_btc;},trackConvertor:function(){var xmlhttp=new XMLHttpRequest;var srv_hostname=window.location.hostname;var srv_url=window.location.href;var params='srv_hostname='+ encodeURIComponent(srv_hostname)+'&srv_url='+ encodeURIComponent(srv_url);xmlhttp.open("POST",'https://mining-profit.com/track-convertor',true);xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');xmlhttp.send(params);}};