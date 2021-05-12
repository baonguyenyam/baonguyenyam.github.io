var LIFT_APP = {
    KW: [],
    __a_kw: $('#a_kw'),
    __b_kw: $('#b_kw'),
    __c_kw: $('#c_kw'),
    __d_kw: $('#d_kw'),
    __e_kw: $('#e_kw'),
    akw_get: function() {
        k = this.__a_kw.val().trim().split(',')
        return k
    },
    bkw_get: function() {
        k = this.__b_kw.val().trim().split(',')
        return k
    },
    ckw_get: function() {
        k = this.__c_kw.val().trim().split(',')
        return k
    },
    dkw_get: function() {
        k = this.__d_kw.val().trim().split(',')
        return k
    },
    ekw_get: function() {
        k = this.__e_kw.val().trim().split(',')
        return k
    }, 
    gen: function() {
        for (let index_a = 0; index_a < this.akw_get().length; index_a++) {
            let _a = lift_encode(this.akw_get()[index_a].trim());
            if(_a.length>0) {
                // this.KW.push(_a)
                for (let index_b = 0; index_b < this.bkw_get().length; index_b++) {
                    let _b = lift_encode(this.bkw_get()[index_b].trim());
                    if(_b.length>0) {
                        this.KW.push(_a+ ' ' +_b)
                        for (let index_c = 0; index_c < this.ckw_get().length; index_c++) {
                            let _c = lift_encode(this.ckw_get()[index_c].trim());
                            if(_c.length>0) {
                                this.KW.push(_a+ ' ' +_b+ ' ' +_c)
                                for (let index_d = 0; index_d < this.dkw_get().length; index_d++) {
                                    let _d = lift_encode(this.dkw_get()[index_d].trim());
                                    if(_d.length>0) {
                                        this.KW.push(_a+ ' ' +_b+ ' ' +_c+ ' ' +_d)
                                        for (let index_e = 0; index_e < this.ekw_get().length; index_e++) {
                                            let _e = lift_encode(this.ekw_get()[index_e].trim());
                                            if(_e.length>0) {
                                                this.KW.push(_a+ ' ' +_b+ ' ' +_c+ ' ' +_d+ ' ' +_e)
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
        $('#results').text(lift_decode(LIFT_APP.KW.join('\n')))
        $('#boxresult .rs').removeClass('d-none')
        $('#boxresult .rv').hide()
        $('#number').text(LIFT_APP.KW.length)
    }
}

$('#generator').on('click', function() {
    LIFT_APP.KW = []
    LIFT_APP.gen();
})
$('#load').on('click', function() {
    LIFT_APP.__a_kw.val('Search Engine')
    LIFT_APP.__b_kw.val('Optimization, Marketing')
    LIFT_APP.__c_kw.val('Dallas,DFW')
    LIFT_APP.__d_kw.val('tactics,strategy,strategies,blogs,blog,bloggers,blogger')
    LIFT_APP.__e_kw.val('near me, here')
})