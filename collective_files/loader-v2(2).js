(function() {

    var __hs_cta_json = {"css":"a#cta_button_3029083_db32735b-eff2-45f1-ad22-7a2fddcf1a35 {\n  cursor:pointer; \nborder-radius:0px}\na#cta_button_3029083_db32735b-eff2-45f1-ad22-7a2fddcf1a35:hover {\n}\na#cta_button_3029083_db32735b-eff2-45f1-ad22-7a2fddcf1a35:active, #cta_button_3029083_db32735b-eff2-45f1-ad22-7a2fddcf1a35:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_3029083_db32735b-eff2-45f1-ad22-7a2fddcf1a35\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=db32735b-eff2-45f1-ad22-7a2fddcf1a35&placement_guid=e69ef44a-ce06-463d-a20e-af8cc3bebccb&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpG-eL6O14yG8IFohEeHDlCGz9W7XoMuIXj1UVQPgB6xJ_moq1-y7JVvFUFGNFIobwwIo99-9UMWFiMWkBeb4AmoFUqH1uGiRDmUy77IjNaVy1fd3BfLZEQwZ9oZvzqDXlaikYpXiY5LY0-3nWXzVhQBG-Dz_PvBqoN4fVrozqepB0BwamIRkaxk1DAvyG1yvfpYyDKPb6F_XluK1x6S-lrUA_7kl2W1ssATeWeJGz7hcPAGewVuaaDI_MtYaSfrqXxNZfSL&click=a26b7fc8-8921-4082-bbab-4eb48670f5b9&hsutk=e0f25c8359122c292bf30614a8869c98\"  cta_dest_link=\"https://eastsideco.com/portfolio\"><img id=\"hs-cta-img-e69ef44a-ce06-463d-a20e-af8cc3bebccb\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"SEE OUR PORTFOLIO\" src=\"https://cdn2.hubspot.net/hubshot/17/11/10/b7988be6-615b-4800-be67-30adff8bc191.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-e69ef44a-ce06-463d-a20e-af8cc3bebccb","raw_html":"<a id=\"cta_button_3029083_db32735b-eff2-45f1-ad22-7a2fddcf1a35\" class=\"cta_button \" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=db32735b-eff2-45f1-ad22-7a2fddcf1a35&placement_guid=e69ef44a-ce06-463d-a20e-af8cc3bebccb&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpG-eL6O14yG8IFohEeHDlCGz9W7XoMuIXj1UVQPgB6xJ_moq1-y7JVvFUFGNFIobwwIo99-9UMWFiMWkBeb4AmoFUqH1uGiRDmUy77IjNaVy1fd3BfLZEQwZ9oZvzqDXlaikYpXiY5LY0-3nWXzVhQBG-Dz_PvBqoN4fVrozqepB0BwamIRkaxk1DAvyG1yvfpYyDKPb6F_XluK1x6S-lrUA_7kl2W1ssATeWeJGz7hcPAGewVuaaDI_MtYaSfrqXxNZfSL&click=a26b7fc8-8921-4082-bbab-4eb48670f5b9&hsutk=e0f25c8359122c292bf30614a8869c98\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://eastsideco.com/portfolio\" title=\"SEE OUR PORTFOLIO\">SEE OUR PORTFOLIO</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('e69ef44a-ce06-463d-a20e-af8cc3bebccb');
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
    window._hsq.push(['trackCtaView', 'e69ef44a-ce06-463d-a20e-af8cc3bebccb', 'db32735b-eff2-45f1-ad22-7a2fddcf1a35']);
}());
