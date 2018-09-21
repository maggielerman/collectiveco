(function() {

    var __hs_cta_json = {"css":"a#cta_button_3029083_91749e7c-24d4-44d3-bb65-eca296f32d1a {\n  cursor:pointer; \nborder-radius:0px}\na#cta_button_3029083_91749e7c-24d4-44d3-bb65-eca296f32d1a:hover {\n}\na#cta_button_3029083_91749e7c-24d4-44d3-bb65-eca296f32d1a:active, #cta_button_3029083_91749e7c-24d4-44d3-bb65-eca296f32d1a:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_3029083_91749e7c-24d4-44d3-bb65-eca296f32d1a\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=91749e7c-24d4-44d3-bb65-eca296f32d1a&placement_guid=10e23b62-f29f-4a50-8bba-2b8ddd488dcb&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpFJ-4JV4Zv1HB0MifSPQmDhL3ntTrwQwot8efJhSLqy2Bj24J809Jqs76aJ35fe-0tEJebqugdbjT7oPrDNvyzhoVCPFjW9sK6k3H1J5a7_cOEIeihj6Atwwj4DIS0o_2YFq2uzQ5Vg2EZH0MyJxG9Ce_eAenGp5o_6S_IoZe_Otg5EjKudqdkvc3eJ1Plt7YfoX2kwYuEkaRB89nrwredU3Gbrdl3WzQTz7FL3-xwipzcGN7tPvPiHcpox-v-j9029j6XY&click=8b3ab80f-3c85-45bd-86b9-75fee0f0b292&hsutk=e0f25c8359122c292bf30614a8869c98\"  cta_dest_link=\"https://eastsideco.com/portfolio\"><img id=\"hs-cta-img-10e23b62-f29f-4a50-8bba-2b8ddd488dcb\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"PORTFOLIO\" src=\"https://cdn2.hubspot.net/hubshot/17/11/10/add33be5-2c28-4a50-a408-6adacf94fcb5.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-10e23b62-f29f-4a50-8bba-2b8ddd488dcb","raw_html":"<a id=\"cta_button_3029083_91749e7c-24d4-44d3-bb65-eca296f32d1a\" class=\"cta_button \" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=91749e7c-24d4-44d3-bb65-eca296f32d1a&placement_guid=10e23b62-f29f-4a50-8bba-2b8ddd488dcb&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpFJ-4JV4Zv1HB0MifSPQmDhL3ntTrwQwot8efJhSLqy2Bj24J809Jqs76aJ35fe-0tEJebqugdbjT7oPrDNvyzhoVCPFjW9sK6k3H1J5a7_cOEIeihj6Atwwj4DIS0o_2YFq2uzQ5Vg2EZH0MyJxG9Ce_eAenGp5o_6S_IoZe_Otg5EjKudqdkvc3eJ1Plt7YfoX2kwYuEkaRB89nrwredU3Gbrdl3WzQTz7FL3-xwipzcGN7tPvPiHcpox-v-j9029j6XY&click=8b3ab80f-3c85-45bd-86b9-75fee0f0b292&hsutk=e0f25c8359122c292bf30614a8869c98\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://eastsideco.com/portfolio\" title=\"PORTFOLIO\">PORTFOLIO</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('10e23b62-f29f-4a50-8bba-2b8ddd488dcb');
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
    window._hsq.push(['trackCtaView', '10e23b62-f29f-4a50-8bba-2b8ddd488dcb', '91749e7c-24d4-44d3-bb65-eca296f32d1a']);
}());
