(function() {

    var __hs_cta_json = {"css":"a#cta_button_3029083_976bcdb2-c626-4bda-8525-c4a92e34d538 {\n  cursor:pointer; \nborder-radius:0px}\na#cta_button_3029083_976bcdb2-c626-4bda-8525-c4a92e34d538:hover {\n}\na#cta_button_3029083_976bcdb2-c626-4bda-8525-c4a92e34d538:active, #cta_button_3029083_976bcdb2-c626-4bda-8525-c4a92e34d538:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_3029083_976bcdb2-c626-4bda-8525-c4a92e34d538\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=976bcdb2-c626-4bda-8525-c4a92e34d538&placement_guid=3a78f2ae-a03b-4c47-8eff-ef6c1a321ca7&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpEO_U1VbLWoHkmzvoEqJfjGBciKDJ05GzCktMeb0zK2hfQtjviSCjjN4uDHEGVUAb3_fqdRPfisvf_m7niux672yhjA-VtPjnym2WdBng8NELu2oYvvo-cKRyoGKlvpfw90yU116Sm7r7Q7gaqA8fSHw8PwzS4KvSzr1wtmr51ubDLQ_0Ak7l4QNYsdZeKQy1wPJecF_sq4NE2VtytOZUgbvZwPHmNzfL4ru6a9kc2cUXCm5yQ0KbL6Jq4d_vyLXKl0xwF6xouu1p5gRFFDk8K9M6aYVA&click=31b0cc86-db4c-4995-b47c-e1db41d408a5&hsutk=e0f25c8359122c292bf30614a8869c98\"  cta_dest_link=\"https://eastsideco.com/shopify-apps\"><img id=\"hs-cta-img-3a78f2ae-a03b-4c47-8eff-ef6c1a321ca7\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"SHOPIFY APPS\" src=\"https://cdn2.hubspot.net/hubshot/17/11/10/ab3d6ebb-8b52-4ca9-adaf-1a6fa9b47051.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-3a78f2ae-a03b-4c47-8eff-ef6c1a321ca7","raw_html":"<a id=\"cta_button_3029083_976bcdb2-c626-4bda-8525-c4a92e34d538\" class=\"cta_button \" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=976bcdb2-c626-4bda-8525-c4a92e34d538&placement_guid=3a78f2ae-a03b-4c47-8eff-ef6c1a321ca7&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpEO_U1VbLWoHkmzvoEqJfjGBciKDJ05GzCktMeb0zK2hfQtjviSCjjN4uDHEGVUAb3_fqdRPfisvf_m7niux672yhjA-VtPjnym2WdBng8NELu2oYvvo-cKRyoGKlvpfw90yU116Sm7r7Q7gaqA8fSHw8PwzS4KvSzr1wtmr51ubDLQ_0Ak7l4QNYsdZeKQy1wPJecF_sq4NE2VtytOZUgbvZwPHmNzfL4ru6a9kc2cUXCm5yQ0KbL6Jq4d_vyLXKl0xwF6xouu1p5gRFFDk8K9M6aYVA&click=31b0cc86-db4c-4995-b47c-e1db41d408a5&hsutk=e0f25c8359122c292bf30614a8869c98\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://eastsideco.com/shopify-apps\" title=\"SHOPIFY APPS\">SHOPIFY APPS</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }

            html = __hs_cta_json.raw_html;
        }

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('3a78f2ae-a03b-4c47-8eff-ef6c1a321ca7');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', '3a78f2ae-a03b-4c47-8eff-ef6c1a321ca7', '976bcdb2-c626-4bda-8525-c4a92e34d538']);
}());
