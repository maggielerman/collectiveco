(function() {

    var __hs_cta_json = {"css":"a#cta_button_3029083_eefd37a8-b39d-40d1-bfdb-61929c2b12e5 {\n  cursor:pointer; \nborder-radius:0px}\na#cta_button_3029083_eefd37a8-b39d-40d1-bfdb-61929c2b12e5:hover {\n}\na#cta_button_3029083_eefd37a8-b39d-40d1-bfdb-61929c2b12e5:active, #cta_button_3029083_eefd37a8-b39d-40d1-bfdb-61929c2b12e5:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_3029083_eefd37a8-b39d-40d1-bfdb-61929c2b12e5\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=eefd37a8-b39d-40d1-bfdb-61929c2b12e5&placement_guid=6e418c6a-db8a-4c1d-ad8e-20655864d898&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpHxRLCpGj3zY1NBW8aqFk9WdoTq_jrPLwTwDjt2KYNGVoA-yrPeywK8JU9DIIzsFrc51gb4II2NdFbhaKg6Mz2gSWKwDeNqlVqqOdSg6QlsvfYxoMM8-1NpPopHsTRO6gE-Io5hc2uo0tfDyH57cKI36xIMdRBGluJX8DmvR0zY-LNGO5wyR9XNyWO4Bi4j-a1aeQmylf6JGUsvX04kntF4fUYPYeOqtypFfyd-rgAQF31IcxqIo3l91ZRrf1m34_vdElzNEkQNi2NZTYlD43Y7zTyxYg&click=a0787502-b90e-4881-9fb3-bbc2dd99f139&hsutk=e0f25c8359122c292bf30614a8869c98\"  cta_dest_link=\"https://eastsideco.com/shopify-apps\"><img id=\"hs-cta-img-6e418c6a-db8a-4c1d-ad8e-20655864d898\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"VIEW APPS\" src=\"https://cdn2.hubspot.net/hubshot/17/11/10/b2892cd4-065b-424a-9f36-8fb50a896613.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-6e418c6a-db8a-4c1d-ad8e-20655864d898","raw_html":"<a id=\"cta_button_3029083_eefd37a8-b39d-40d1-bfdb-61929c2b12e5\" class=\"cta_button \" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=eefd37a8-b39d-40d1-bfdb-61929c2b12e5&placement_guid=6e418c6a-db8a-4c1d-ad8e-20655864d898&portal_id=3029083&canon=https%3A%2F%2Feastsideco.com%2F&redirect_url=APefjpHxRLCpGj3zY1NBW8aqFk9WdoTq_jrPLwTwDjt2KYNGVoA-yrPeywK8JU9DIIzsFrc51gb4II2NdFbhaKg6Mz2gSWKwDeNqlVqqOdSg6QlsvfYxoMM8-1NpPopHsTRO6gE-Io5hc2uo0tfDyH57cKI36xIMdRBGluJX8DmvR0zY-LNGO5wyR9XNyWO4Bi4j-a1aeQmylf6JGUsvX04kntF4fUYPYeOqtypFfyd-rgAQF31IcxqIo3l91ZRrf1m34_vdElzNEkQNi2NZTYlD43Y7zTyxYg&click=a0787502-b90e-4881-9fb3-bbc2dd99f139&hsutk=e0f25c8359122c292bf30614a8869c98\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://eastsideco.com/shopify-apps\" title=\"VIEW APPS\">VIEW APPS</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('6e418c6a-db8a-4c1d-ad8e-20655864d898');
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
    window._hsq.push(['trackCtaView', '6e418c6a-db8a-4c1d-ad8e-20655864d898', 'eefd37a8-b39d-40d1-bfdb-61929c2b12e5']);
}());
