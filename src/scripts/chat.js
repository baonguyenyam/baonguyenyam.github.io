var LIFT_CHAT_APP = {
	buildHTML: '',
	chat: () => {
		return document.createElement("section");
	},
	buildChatHTML: () => {
		var aEl = LIFT_CHAT_APP.chat();
		aEl.innerHTML = '<div class="lift-js-chatbox__body__header"><nav class="lift-js-chatbox__body__header-cta-text"><span class="lift-js-chatbox__body__header-cta-icon"><span class="lift-js-chatbox__body__header-cta-icon-avatar"></span></span><span class="lift-js-chatbox__body__header-title-chat">Chat with us</span></nav></div><div class="lift-js-chatbox__body-display lift-js-chatbox__body__display"></div><div class="lift-js-chatbox__body__footer"><div class="lift-js-chatbox__body__footer-copyright"><a href="'+b64DecodeUnicode('aHR0cHM6Ly9iYW9uZ3V5ZW55YW0uZ2l0aHViLmlv')+'" target="blank">'+b64DecodeUnicode('UE9XRVJFRCBCWQ==')+' <span>'+b64DecodeUnicode('TkdVWUVOIFBIQU0=')+' </span></a></div></div>';
		aEl.classList.add("lift-js-chatbox__body");
		aEl.classList.add("chatbox--is-visible");
		return aEl
	},
	icon: () => {
		return document.createElement("section");
	},
	button: () => {
		return document.createElement("button");
	},
	main: () => {
		return document.createElement("div");
	},
	mainHTML: () => {
		var aEl = LIFT_CHAT_APP.main();
		aEl.innerHTML = '';
		aEl.id = "lift-chat-box";
		aEl.classList.add("lift-js-chatbox");
		aEl.appendChild(LIFT_CHAT_APP.buildChatHTML());
		return aEl
	},
	iconEl: () => {
		var iEiCon  = LIFT_CHAT_APP.icon();
		iEiCon.classList.add("lift-js-chatbox__icon");
		iEiCon.classList.add("lift-js-chatbox__icon-pulse");
		iEiCon.innerHTML = '<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve"><path d="M0,28.5c0,14.888,13.458,27,30,27c4.263,0,8.379-0.79,12.243-2.349c6.806,3.928,16.213,5.282,16.618,5.339 c0.047,0.007,0.093,0.01,0.139,0.01c0.375,0,0.725-0.211,0.895-0.554c0.192-0.385,0.116-0.85-0.188-1.153 c-2.3-2.3-3.884-7.152-4.475-13.689C58.354,38.745,60,33.704,60,28.5c0-14.888-13.458-27-30-27S0,13.612,0,28.5z M40,28.5 c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S40,30.706,40,28.5z M26,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4 S26,30.706,26,28.5z M12,28.5c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S12,30.706,12,28.5z"></path></svg>';
		document.querySelector("#lift-chat-box").appendChild(iEiCon)
		iEiCon.addEventListener("click", () => {
			// Toggle chat Box 
			iEiCon.classList.toggle("chaticon--is-visible");
			if (LIFT_CHAT_APP.buildChatHTML().classList.contains("chatbox--is-visible")) {
				document.querySelector("#lift-chat-box .lift-js-chatbox__body").classList.toggle('chatbox--is-visible');
			}
			// Add Class chat item 
			if (!LIFT_CHAT_APP.buildChatHTML().classList.contains("chatbox--is-visible")) {
			}
			LIFT_CHAT_APP.checkHeight()
		})
		return iEiCon;
	},
	buttonEl: () => {
		var buttonEl  = LIFT_CHAT_APP.button();
		buttonEl.classList.add("lift-js-chatbox__body-toggle");
		buttonEl.classList.add("lift-js-chatbox__body__header-cta-btn");
		buttonEl.innerHTML = '<svg version="1.1" x="0px" y="0px" viewBox="0 0 492.002 492.002" xml:space="preserve"><g><g><path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132C494.624,356.041,494.624,338.965,484.136,328.473z"></path></g></g></svg>';
		document.querySelector("#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__header").appendChild(buttonEl)
		buttonEl.addEventListener("click", () => {
			document.querySelector("#lift-chat-box .lift-js-chatbox__body").classList.toggle("chatbox--is-visible");
			document.querySelector("#lift-chat-box .lift-js-chatbox__icon").classList.toggle('chaticon--is-visible');
		})
		return buttonEl;
	},
	checkHeight: () => {
		var _docHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		if(_docHeight < 600) {
			let elmsH = document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__header').offsetHeight;
			let elmsF = document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__footer').offsetHeight;
			let elmsM = _docHeight;
			let all = elmsM - (elmsH + elmsF + 20 + (_docHeight/5));
			document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = all+'px';
			setTimeout(()=>{ document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = all+'px'; }, 1000);
		} else if(_docHeight >= 600 && _docHeight < 1000) {
			document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = '400px';
			setTimeout(()=>{ document.querySelector('#lift-chat-box .lift-js-chatbox__body .lift-js-chatbox__body__display').style.maxHeight = '400px'; }, 1000);
		}
	},
	iniBtnAction: () => {
		liftDOMChange(() => { 
		var itm = document.querySelectorAll('.lift-js-chatbox__body__display-chat-item');
			[].forEach.call(itm, (m) => {
			if (m.getAttribute("data-chat-show")) {
				m.addEventListener("click", () => {
					m.closest(".lift-js-chatbox__body__display .lift-js-chatbox__body__display-chat").classList.remove("chatitem--is-active");
					document.getElementById(m.getAttribute("data-chat-show")).classList.add("chatitem--is-active");
					LIFT_CHAT_APP.checkHeight()
				});
			}
			});
		});
	},
	createChatContent: () => {
		LIFT_CHAT_APP.jsonLoad(
			'/data.json',
			(data) => { 
				for (let i = 0; i < data.data.length; i++) {
					let getActive = (i == 0) ? ' chatitem--is-active' : ''
					LIFT_CHAT_APP.buildHTML += '<div id="'+data.data[i].id+'" class="lift-js-chatbox__body__display-chat'+getActive+'">'
					for (let u = 0; u < data.data[i].items.length; u++) {
						let getArrow = (data.data[i].items[u].target != 'undefined' && data.data[i].items[u].target != null  && data.data[i].items[u].target != "") ? ' lift-js-chatbox__body__display-chat-item-sms-arrow' : ''
						let aEl = document.createElement("div");
						let html = ''

						html += '<div class="lift-js-chatbox__body__display-chat-item-sms'+getArrow+'">'
						html += data.data[i].items[u].content
						html += '</div>\n'

						aEl.classList.add("lift-js-chatbox__body__display-chat-item");
						if(data.data[i].items[u].target != 'undefined' && data.data[i].items[u].target != null  && data.data[i].items[u].target != "") {
							let id = Math.random().toString(36).substr(2, 9);
							aEl.setAttribute("data-chat-show", data.data[i].items[u].target)
							aEl.setAttribute("id", id)
						}
						aEl.innerHTML = html;
						LIFT_CHAT_APP.buildHTML += aEl.outerHTML;
					}
					LIFT_CHAT_APP.buildHTML += '</div>\n'
				}
				document.querySelector("#lift-chat-box .lift-js-chatbox__body__display").innerHTML = LIFT_CHAT_APP.buildHTML;
			},
			(xhr) => {}
		);
	},
	init: () => {
		LIFT_CHAT_APP.createChatContent();
		// BUTTON 
		LIFT_CHAT_APP.buttonEl()
		// ICON 
		LIFT_CHAT_APP.iconEl();
		// ADD ACTION 
		LIFT_CHAT_APP.iniBtnAction()
	},
	jsonLoad: (path, success, error) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					if (success)
						success(JSON.parse(xhr.responseText));
				} else {
					if (error)
						error(xhr);
				}
			}
		};
		xhr.open("GET", path, true);
		xhr.send();
	}
}

LIFTReady(() => {
	var lift_chat_element = document.getElementById("lift-chat-box");
	if(typeof(lift_chat_element) != 'undefined' && lift_chat_element != null && lift_chat_element != "") {
		LIFT_CHAT_APP.init()
	} else {
		document.body.appendChild(LIFT_CHAT_APP.mainHTML())
		LIFT_CHAT_APP.init()
	}
	
});
