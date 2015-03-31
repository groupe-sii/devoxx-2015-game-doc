'use strict';

if (!window.location.hash) {
    window.location.hash = '#!/public/';
}

(function(gblCtx) {
    var adapt = function() {
            // rename texts to match Stomp
            $('h4:contains("Response Messages")').text('Events');
            $('h4:contains("Response Class")').text('Event Class');
            $('th:contains("HTTP Status Code")').text('Event topic');
            $('th:contains("Response Model")').text('Event Model');
            $('.http_method a:contains("post")').text('publish');
            $('.http_method a:contains("get")').text('subscribe');

            // remove column
            $('th:contains("Value")').hide();
            $('th:last-child').width('auto');

            // hide private
            if (window.location.search.indexOf('private') == -1) {
                $('#resource_private').hide();
            }
        },

        initUiDefinitions = function() {
            console.log('initUiDefinitions');

            var collapseResource = function(e) {
                    console.log('collapseResource');
                    toggleEndpointList(null, true);
                    $('.definitions .resource ul.endpoints .content').slideUp();
                },

                expandResource = function(e) {
                    console.log('expandResource');
                    toggleEndpointList(null, true);
                    $('.definitions .resource ul.endpoints .content').slideDown();
                },

                collapseEndpointListForResource = function() {
                    $('.definitions .resource ul.endpoints').slideUp();
                },

                expandEndpointListForResource = function() {
                    $('.definitions .resource ul.endpoints').slideDown();
                },

                toggleEndpointList = function(e, force) {
                    var elem = $('.definitions .resource .endpoints');
                    if (elem.is(':visible') && !force) {
                        collapseEndpointListForResource();
                    } else {
                        expandEndpointListForResource();
                    }
                },

                toggleOperationContent = function(e) {
                    var $content = $(this).find('.content');
                    if ($content.is(':visible')) {
                        $content.slideUp();
                    } else {
                        $content.slideDown();
                    }
                };

            $('.definitions .options .collapseResource').click(collapseResource);
            $('.definitions .options .expandResource').click(expandResource);
            $('.definitions .options .toggleEndpointList').click(toggleEndpointList);
            $('.definitions .toggleOperation').click(toggleOperationContent);
        },

        populateDefinitions = function() {
            var source = $('#entry-template').html(),
                template = Handlebars.compile(source),
                definitions = swaggerUi.api.definitions,
                html = template({
                    definitions: definitions
                });

            $('.definitions-container').html(html);

            initUiDefinitions();
        };

    gblCtx.sii = {
        adapt: adapt,
        populateDefinitions: populateDefinitions
    };
})(this);

// Value = {{this}}
