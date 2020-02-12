// JavaScript Document
/**
@prefix : <http://purl.org/net/ns/doas#> .
<http://factory.yusukenakanishi.com/javascript/jquery/plugin/imagetabs/js/imageTabs.js> a :JavaScript;
 :shortdesc "imageTabs.js";
 :created "2010-06-10";
 :release [:revision "1.0"; :created "2010-06-10"];
 :author [:name "Yusuke. Nakanishi"; :homepage <http://yusukenakanishi.com/> ];
 :license <http://creativecommons.org/licenses/GPL/2.0/>;
 :dependencies "none" .
*/

(function($){

    $.fn.imageTabs = function(options){
    
        // 引数のデフォルト値を渡す
        var conf = $.extend({
            animate: 'show',
            duration: '',
            opentab: ''
        }, options); // optionsに値があれば上書きする
        
        // 初期設定
        var target = this;
        var tabPanel = $('div.tabPanel', target);
        tabPanel.hide();
        var handler = $('ul.tab li a', target);
        
        // ウィンドウを開いた時のタブの位置
        if(conf.opentab) {
            tabPanel.each(function() {
                if($(this).attr('id') == conf.opentab) {
                    $(this).show();
                }
            });
            handler.each(function() {
                if($(this).attr('href') == '#' + conf.opentab) {
                    var imgSrc = $(this).children('img').attr('src');
                    var imgDot = imgSrc.lastIndexOf('.');
                    var onSrc = imgSrc.substr(0, imgDot) + '_on' + imgSrc.substr(imgDot, 4);
                    $(this).children('img').attr('src',onSrc).addClass('active');
                }
            });
        } else {
            $('div.tabPanel:first', target).show();
            var imgSrc = $('ul.tab li:first a', target).children('img').attr('src');
            var imgDot = imgSrc.lastIndexOf('.');
            var onSrc = imgSrc.substr(0, imgDot) + '_on' + imgSrc.substr(imgDot, 4);
            $('ul.tab li:first a', target).children('img').attr('src',onSrc).addClass('active');
        }
        
        // クリック時の動作
        handler.click(function() {
            var classJudgment = $(this).children('img').attr('class');
            if(classJudgment !== 'active') {
                // タブ画像の切り替え
                var imgSrc = $(this).children('img').attr('src').replace(/_on/g, ""); // _onが複数付かないように
                var imgDot = imgSrc.lastIndexOf('.');
                var onSrc = imgSrc.substr(0, imgDot) + '_on' + imgSrc.substr(imgDot, 4);
                $(this).children('img').attr('src',onSrc);
                var imgOff = $('ul.tab li img.active', target).attr('src').replace(/_on/g, "");
                $('ul.tab li img.active', target).attr('src',imgOff);
                $('ul.tab li img.active', target).removeClass('active');
                $(this).children('img').addClass('active');
                // コンテンツの切り替え
                var clickAttr = $(this).attr('href');
                var boxHeight = $('div.tabPanelGroup').height();
                $('div.tabPanelGroup').css('height', boxHeight);
                $('div.tabPanel:visible', target).stop(true, true).hide();
                $('div#' + clickAttr)[conf.animate](conf.duration);
                $('div.tabPanelGroup').css('height', 'auto');
            }
            return false;
        });
        
        // ロールオーバー
        handler.hover(function() {
            var classJudgment = $(this).children('img').attr('class');
            if(classJudgment !== 'active') {
                var imgSrc = $(this).children('img').attr('src');
                var imgDot = imgSrc.lastIndexOf('.');
                var onSrc = imgSrc.substr(0, imgDot) + '_on' + imgSrc.substr(imgDot, 4);
                $(this).children('img').attr('src',onSrc);
            }
        }, function() {
            var classJudgment = $(this).children('img').attr('class');
            if(classJudgment !== 'active') {
                var imgOff = $(this).children('img').attr('src').replace(/_on/g, "");
                $(this).children('img').attr('src',imgOff);
            }
        });
        
    }
    
})(jQuery);