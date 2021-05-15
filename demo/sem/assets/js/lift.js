var LIFT_APP = {
    KW: [],
    __a_kw: $("#a_kw"),
    __b_kw: $("#b_kw"),
    __c_kw: $("#c_kw"),
    __d_kw: $("#d_kw"),
    __e_kw: $("#e_kw"),
    akw_get: function () {
        k = this.__a_kw.val().trim().split(",");
        return k;
    },
    bkw_get: function () {
        k = this.__b_kw.val().trim().split(",");
        return k;
    },
    ckw_get: function () {
        k = this.__c_kw.val().trim().split(",");
        return k;
    },
    dkw_get: function () {
        k = this.__d_kw.val().trim().split(",");
        return k;
    },
    ekw_get: function () {
        k = this.__e_kw.val().trim().split(",");
        return k;
    },
    gen: function () {
        for (let index_a = 0; index_a < this.akw_get().length; index_a++) {
            let _a = lift_encode(this.akw_get()[index_a].trim());
            if (_a.length > 0) {
                // this.KW.push(_a)
                for (let index_b = 0; index_b < this.bkw_get().length; index_b++) {
                    let _b = lift_encode(this.bkw_get()[index_b].trim());
                    if (_b.length > 0) {
                        this.KW.push(_a + " " + _b);
                        for (let index_c = 0; index_c < this.ckw_get().length; index_c++) {
                            let _c = lift_encode(this.ckw_get()[index_c].trim());
                            if (_c.length > 0) {
                                this.KW.push(_a + " " + _b + " " + _c);
                                for (
                                    let index_d = 0;
                                    index_d < this.dkw_get().length;
                                    index_d++
                                ) {
                                    let _d = lift_encode(this.dkw_get()[index_d].trim());
                                    if (_d.length > 0) {
                                        this.KW.push(_a + " " + _b + " " + _c + " " + _d);
                                        for (
                                            let index_e = 0;
                                            index_e < this.ekw_get().length;
                                            index_e++
                                        ) {
                                            let _e = lift_encode(this.ekw_get()[index_e].trim());
                                            if (_e.length > 0) {
                                                this.KW.push(
                                                    _a + " " + _b + " " + _c + " " + _d + " " + _e
                                                );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        $("#results").text(lift_decode(LIFT_APP.KW.join("\n")));
        $("#boxresult .rs").removeClass("d-none");
        $("#boxresult .rv").hide();
        $("#number").text(LIFT_APP.KW.length);
    },
};
$("#keyworkds").val(localStorage.getItem("myLIFT"));
$("#generator").on("click", function () {
    if (!LIFT_APP.__a_kw.val() || !LIFT_APP.__b_kw.val()) {
        alert("Please enter kưywords");
    } else {
        LIFT_APP.KW = [];
        LIFT_APP.gen();
    }
});
$("#url").on("click", function () {
    var err = "";
    if (!$("#urlsource").val()) {
        err += "Please enter URL\n";
    }
    if (err) {
        alert(err);
    } else {
        $.ajax({
            type: 'GET',
            url: $("#urlsource").val().trim(),
            crossDomain: true,
            dataType: 'text/html',
            xhrFields: {
                withCredentials: false
            },
            headers: {
                "Access-Control-Allow-Origin: ": "*",
                "Access-Control-Allow-Methods: ": "GET",
                "Access-Control-Allow-Headers: ": "Authorization",
            },
            success: function (data) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
});
$("#create-btn").on("click", function () {
    var err = "";
    if (!$("#source").val()) {
        err += "Please upload source file\n";
    }
    if (!$("#keyworkds").val()) {
        err += "Please enter keywords list\n";
    }
    if (err) {
        alert(err);
    } else {
        var nel = lift_decode(localStorage.getItem("myLIFT_KW")).split(",");
        var nst = ''
        var arrayDone = []
        var m = replaceLIFT(LIFT_APP.code.getValue());
        var dochange = m.replace(/<item>(.*?)<\/item>/gi, '___REPLACE___')
        var result = m.match(/<item>(.*?)<\/item>/gi).map(function (val) { return val; });
        for (let index = 0; index < result.length; index++) {
            nst += '___REPLACE___'
        }
        for (let gmc = 0; gmc < nel.length; gmc++) {
            arrayDone.push(result[0].replace(/\[lift_kw_change\]/gi, nel[gmc]))
        }
        var t = dochange.replace(nst, arrayDone.join(""))
        $("#results").val(unReplaceLIFT(t))
        var text = $("#results").val();
        var filename = "LIFT_KW_LIST_" + new Date().getTime() + ".xml";
        download(filename, text);
    }
});
$("#dwn-btn").on("click", function () {
    var text = $("#results").val();
    var filename = "LIFT_KW_LIST_" + new Date().getTime() + ".txt";
    download(filename, text);
});
$("#save-btn").on("click", function () {
    localStorage.removeItem("myLIFT");
    localStorage.setItem("myLIFT", $("#results").val());
    localStorage.removeItem("myLIFT_KW");
    localStorage.setItem("myLIFT_KW", LIFT_APP.KW);
});
$("#clear").on("click", function () {
    localStorage.removeItem("myLIFT_KW");
    localStorage.removeItem("myLIFT");
    alert("Finished!");
});
$("#load").on("click", function () {
    LIFT_APP.__a_kw.val("Search Engine");
    LIFT_APP.__b_kw.val("Optimization, Marketing");
    LIFT_APP.__c_kw.val("Dallas, DFW");
    LIFT_APP.__d_kw.val("tactics, strategy, strategies, blogs, blog, bloggers, blogger");
    LIFT_APP.__e_kw.val("near me, here");
});
$("#validator-btn").on("click", function () {
    var err = "";
    var err_HTML = "";
    var check_HTML = "";
    if (!$("#htmlcode").val()) {
        err += "Please enter HTML Code\n";
    }
    if (err) {
        alert(err);
    } else {
        var n = $("#htmlcode").val().trim()
        LIFT_APP.htmlResults_H1 = n.match(/<h1[^>]*>(.*?)<\/h1>/gi);
        LIFT_APP.htmlResults_H2 = n.match(/<h2[^>]*>(.*?)<\/h2>/gi);
        LIFT_APP.htmlResults_H3 = n.match(/<h3[^>]*>(.*?)<\/h3>/gi);
        LIFT_APP.htmlResults_H4 = n.match(/<h4[^>]*>(.*?)<\/h4>/gi);
        LIFT_APP.htmlResults_H5 = n.match(/<h5[^>]*>(.*?)<\/h5>/gi);
        LIFT_APP.htmlResults_H6 = n.match(/<h6[^>]*>(.*?)<\/h6>/gi);
        LIFT_APP.htmlResults_og_title = n.match(/og:title/gi);
        if(LIFT_APP.htmlResults_H1) {
            LIFT_APP.htmlResults_H1.map(function (val) { return val; });
            if(LIFT_APP.htmlResults_H1.length > 1) {
                err_HTML += "<li>We have more than 1 tag H1</li>";
            }
        } else {
            err_HTML += "<li>We need improve H1 tag</li>";
            LIFT_APP.htmlResults_H1 = []
        }
        LIFT_APP.htmlResults_H2 ? LIFT_APP.htmlResults_H2 : LIFT_APP.htmlResults_H2 = []
        LIFT_APP.htmlResults_H3 ? LIFT_APP.htmlResults_H3 : LIFT_APP.htmlResults_H3 = []
        LIFT_APP.htmlResults_H4 ? LIFT_APP.htmlResults_H4 : LIFT_APP.htmlResults_H4 = []
        LIFT_APP.htmlResults_H5 ? LIFT_APP.htmlResults_H5 : LIFT_APP.htmlResults_H5 = []
        LIFT_APP.htmlResults_H6 ? LIFT_APP.htmlResults_H6 : LIFT_APP.htmlResults_H6 = []
        if (err_HTML) {
            $('#err_HTML').html('<ul class="mb-0">'+err_HTML+'</ul>').removeClass('d-none')
            $('#done_HTML').addClass('d-none')
        } else {
            $('#err_HTML').addClass('d-none')
            $('#done_HTML').removeClass('d-none')
        }
        $('#check_HTML').html('<div class="list-group">'
        +resultHTMLValidate('H1 Tag',LIFT_APP.htmlResults_H1.length)
        +resultHTMLValidate('H2 Tag',LIFT_APP.htmlResults_H1.length)
        +resultHTMLValidate('H3 Tag',LIFT_APP.htmlResults_H3.length)
        +resultHTMLValidate('H4 Tag',LIFT_APP.htmlResults_H1.length)
        +resultHTMLValidate('H5 Tag',LIFT_APP.htmlResults_H1.length)
        +resultHTMLValidate('H6 Tag',LIFT_APP.htmlResults_H1.length)
        +resultHTMLValidate('OG Title Tag',(LIFT_APP.htmlResults_og_title ? 'Ready' : 'Undefined'))
        +'</div>').removeClass('d-none')
    }
});