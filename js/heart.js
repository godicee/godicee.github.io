! function(e, t, a) {
    function n() {
        var cssStyles = ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}";
        c(cssStyles), o(), r()
    }

    function r() {
        for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }

    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(), i(e)
        }
    }

    function i(e) {
        // 生成正常大小的爱心
        var a = t.createElement("div");
        a.className = "heart";
        d.push({
            el: a,
            x: e.clientX ,
            y: e.clientY ,
            scale: 1,
            alpha: 1,
            color: s()
        });
        t.body.appendChild(a);
    
        // 环绕生成多个小爱心
        for (var j = 0; j < 5; j++) { // 生成16个小爱心
            var angle = (j / 5) * Math.PI; // 计算角度
            var radius = 20; // 半径
            var x = e.clientX + radius * Math.cos(angle); // 计算x坐标
            var y = e.clientY - radius * Math.sin(angle); // 计算y坐标
    
            var b = t.createElement("div");
            b.className = "heart tiny";
            d.push({
                el: b,
                x: x,
                y: y,
                scale: 0.5,
                alpha: 1,
                color: s()
            });
            t.body.appendChild(b);
        }
    }
    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }

    function s() {
        var colors = [
            "rgba(236,94,135,1)", // 浅红
            "rgba(241,144,102,1)", // 橘黄
            "rgba(245,194,79,1)", // 浅黄
            "rgba(106,170,100,1)", // 浅绿        
            "rgba(159,122,234,1)" // 浅紫
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    var d = [];
    e.requestAnimationFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
    }(), n()
}(window, document);
