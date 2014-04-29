/**
 * News Ticker v1 - Fully loaded, responsive content slider
 *
 * Copyright 2014, Bhaumik Patel
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

// Newsticker Class
Newsticker = Class.create(Abstract, {

    /* Initializes namespace settings to be used throughout plugin */
    initialize: function (container, options) {
        this.options = Object.extend({
            // GENERAL
            interval: 6000, // News transition duration (in ms)

            // Style
            containerSetStyle: null, // News Ticker container style
            newsContainerSetStyle: null, // News Ticker UL container style
            newsInnerContainerSetStyle: null, // Ticker LI container style

            // Custom HTML
            before: null, // News Ticker append custom html before container
            after: null, // News Ticker append custom html after container
            innerBefore: null, // News Ticker append custom html before UL container
            innerAfter: null // News Ticker append custom html after UL container
        }, options || {});

        // Main Container
        this.container = $(container);
        if (this.container != null) {

            // Set Container Style
            this.container.setStyle(this.options.containerSetStyle);

            // Get UL Elements
            this.newsContainer = $A(this.container.getElementsByTagName("ul"));

            // Set UL Elements Style
            this.newsContainer[0].setStyle(this.options.newsContainerSetStyle);

            // Get LI Elements
            this.messages = $A(this.container.getElementsByTagName("li"));

            // Get Message Length
            this.number_of_messages = this.messages.length;
            if (this.number_of_messages == 0) {
                this.showError();
                return false;
            }
            else {
                // Set Message Style
                this.setNewsInnerContainerStyle(this.options);
            }

            // Initializes
            this.current_message = 0;
            this.previous_message = null;

            // Set Custome HTML - Append custom html after UL container
            this.container.insert(this.options.innerAfter);

            // Set Custome HTML
            this.container.insert({
                top: this.options.innerBefore,
                before: this.options.before,
                after: this.options.after
            });

            // Initializes Message
            this.hideMessages();
            this.showMessage();

            // Set timer
            this.timer = setInterval(this.showMessage.bind(this), this.options.interval);
        }
    },
    /* Show Message */
    showMessage: function () {
        Effect.Appear(this.messages[this.current_message]);
        setTimeout(this.fadeMessage.bind(this), this.options.interval - 2000);
        if (this.current_message < this.number_of_messages - 1) {
            this.previous_message = this.current_message;
            this.current_message = this.current_message + 1;
        } else {
            this.current_message = 0;
            this.previous_message = this.number_of_messages - 1;
        }
    },
    /* Fade Message */
    fadeMessage: function () {
        Effect.Fade(this.messages[this.previous_message]);
    },
    /* Hide Message */
    hideMessages: function () {
        this.messages.each(function (message, index) {
            Element.hide(message);
        })
    },
    /* Set Message (LI) Style */
    setNewsInnerContainerStyle: function (options) {
        this.messages.each(function (message, index) {
            message.setStyle(options.newsInnerContainerSetStyle);
        })
    },
    /* if message length is 0 then show the error */
    showError: function () {
        if (this.container.getElementsByTagName("ul").length == 0) {
            this.list = document.createElement("ul");
            this.container.appendChild(this.list);
        } else {
            this.list = this.container.getElementsByTagName("ul")[0];
        }
        this.errorMessage = document.createElement("li");
        this.errorMessage.className = "error";
        this.errorMessage.innerHTML = "Could not retrieve data";
        this.list.appendChild(this.errorMessage);
    }
});
