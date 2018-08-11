!function (t) {
    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {exports: {}, id: e, loaded: !1};
        return t[e].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports
    }

    var o = {};
    r.m = t, r.c = o, r.p = "", r(0)
}([function (t, r, o) {
    t.exports = o(1)
}, function (t, r) {
    "use strict"
}]);
;
!function (t) {
    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {exports: {}, id: e, loaded: !1};
        return t[e].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports
    }

    var o = {};
    r.m = t, r.c = o, r.p = "", r(0)
}({
    0: function (t, r, o) {
        t.exports = o(6)
    }, 6: function (t, r) {
        "use strict"
    }
});
;
!function (a) {
    function t(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {exports: {}, id: o, loaded: !1};
        return a[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var e = {};
    t.m = a, t.c = e, t.p = "", t(0)
}([function (a, t, e) {
    a.exports = e(1)
}, function (a, t, e) {
    "use strict";

    function o(a) {
        return a && a.__esModule ? a : {default: a}
    }

    var i = e(2), s = (o(i), e(3)), l = (o(s), e(4)), n = (o(l), e(5)), r = (o(n), e(6)), c = (o(r), e(7));
    o(c)
}, function (a, t) {
    "use strict";
    !function (a, t) {
        a.tabelaClassificacao = {
            init: function (a) {
                this.$widgetClassificacao = t("#widget-classificacao"), new NavegacaoFases(this.$widgetClassificacao.find(".tabela-navegacao-fases")), this.iniciarTabelas()
            }, iniciarTabelas: function () {
                new Regulamento(t("#ver-regulamento-js")), this.$widgetClassificacao.find(".tabela").each(function () {
                    new PontosCorridos(t(this))
                }), this.$widgetClassificacao.find(".lista-de-jogos").each(function () {
                    new NavegadorListaJogos(t(this))
                })
            }
        }, t(function () {
            a.tabelaClassificacao.init()
        })
    }(window, jQuery)
}, function (a, t) {
    "use strict";

    function e(a) {

    }

    window.NavegadorListaJogos = e
}, function (a, t) {
    "use strict";
    !function (a, t, e) {
        var o = function (t) {
            if (this.$tabela = t, 1 === this.$tabela.length) {
                this.timeout = void 0, this.scrollActive = !1, this.larguraDocumento = this.getLarguraDocumento(), this.$tabelaPontuacao = this.$tabela.find(".tabela-pontos"), this.$tabelaTimes = this.$tabela.find(".tabela-times"), this.$tabelaScroll = this.$tabela.find(".tabela-scroll"), this.$linksTimes = this.$tabelaTimes.find(".tabela-times-time-link"), this.tabelaTimesLarguraInicial = this.$tabelaTimes.outerWidth(), "native" !== a.overthrow.support && a.overthrow.sidescroller(this.$tabelaScroll[0]), this.setSVGFallbackClass(), this.setPadding(), this.setScroll();
                var o = this;
                e(a).on("resize", function () {
                    clearTimeout(o.timeout), o.timeout = setTimeout(function () {
                        o.larguraDocumento !== o.getLarguraDocumento() && (o.larguraDocumento = o.getLarguraDocumento(), o.unsetTimesScrollClass(), o.setPadding(), o.setScroll(), o.setTimesScroll({data: {PontosCorridos: o}}))
                    }, 200)
                }), this.$linksTimes.on("click", this.clickLinkTime)
            }
        };
        o.prototype.getLarguraDocumento = function () {
            return a.innerWidth || t.body.clientWidth
        }, o.prototype.setSVGFallbackClass = function () {
            t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || this.$tabela.addClass("no-svg")
        }, o.prototype.setPadding = function () {
            var t = this.tabelaTimesLarguraInicial;
            "native" !== a.overthrow.support && (this.$tabela.outerWidth() < 460 ? (t = this.tabelaTimesLarguraInicial - 50, this.setTimesScrollClass(t)) : this.unsetTimesScrollClass()), this.$tabelaScroll.css({
                opacity: 1,
                "padding-left": t
            })
        }, o.prototype.setScroll = function () {
            var t = this.$tabela.outerWidth();
            this.$tabelaTimes.outerWidth() + this.$tabelaPontuacao.outerWidth() > t ? this.scrollActive || (this.scrollActive = !0, this.$tabelaTimes.addClass("tabela-times-com-borda"), this.$tabelaScroll.addClass("tabela-scroll-ativo"), "native" === a.overthrow.support && (this.$tabelaScroll.on("scroll", {PontosCorridos: this}, this.setTimesScroll), this.addFakeTableForStyle())) : (this.scrollActive = !1, this.$tabelaTimes.removeClass("tabela-times-com-borda"), this.$tabelaScroll.removeClass("tabela-scroll-ativo"), this.$tabelaScroll.off("scroll", this.setTimesScroll), this.removeFakeTableForStyle())
        }, o.prototype.setTimesScroll = function (a) {
            var t = a.data.PontosCorridos, e = t.tabelaTimesLarguraInicial - t.$tabelaScroll.scrollLeft(),
                o = t.tabelaTimesLarguraInicial - 50;
            e = e > o ? e : o, e >= t.tabelaTimesLarguraInicial ? t.unsetTimesScrollClass() : t.setTimesScrollClass(e)
        }, o.prototype.unsetTimesScroll = function (a) {
            setTimeout(function () {
                a.data.PontosCorridos.setTimesScroll(a)
            }, 300)
        }, o.prototype.setTimesScrollClass = function (a) {
            this.$tabelaTimes.addClass("tabela-times-scrolling").css("width", a)
        }, o.prototype.unsetTimesScrollClass = function () {
            this.$tabelaTimes.removeClass("tabela-times-scrolling").removeAttr("style"), this.tabelaTimesLarguraInicial = this.$tabelaTimes.outerWidth()
        }, o.prototype.clickLinkTime = function (t) {
            if (a._gaq) {
                var o = e(t.target), i = o.hasClass("tabela-times-time-link") ? o : o.parent(),
                    s = i.find(".tabela-times-time-nome").text();
                a._gaq.push(["_trackEvent", "Tabela", "Clique na area 1 | Tabela | Tabela pontos corridos", "Clique em " + s, 0, !0])
            }
        }, o.prototype.addFakeTableForStyle = function () {
            if (this.$tabela.find(".tabela-fake").length < 1) {
                for (var a = this.$tabelaTimes.find("tr").length - 1, t = '<div class="tabela-fake"><table class="tabela-fake-table"><thead><tr class="tabela-head-linha"><th class="coluna-fake-left">&nbsp;</th><th>&nbsp;</th></tr></thead><tbody>', e = a - 1; e >= 0; e--) t += '<tr class="tabela-body-linha"><td>&nbsp;</td><td>&nbsp;</td></tr>';
                t += "</tbody></table></div>", this.$tabela.append(t)
            }
        }, o.prototype.removeFakeTableForStyle = function () {
            this.$tabela.find(".tabela-fake").remove()
        }, a.PontosCorridos = o
    }(window, document, jQuery)
}, function (a, t) {
    "use strict";
    !function (a, t, e) {
        var o = function (a) {
            this.$verRegulamento = a, this.$regulamento = t("#widget-classificacao .regulamento-texto-js"), 1 !== this.$verRegulamento.length && 1 !== this.$regulamento.length || (this.textoRegulamento = this.$regulamento.html(), this.$body = t("body"), this.$popin = t(this.montaPopin()), this.$verRegulamento.on("click", {Regulamento: this}, this.show))
        };
        o.prototype.montaPopin = function () {
            var a = "";
            return a += '<div class="popin-regulamento">', a += '   <div class="popin-regulamento-wrapper">', a += "   </div>", a += '   <div class="popin-regulamento-conteudo">', a += '       <span class="popin-regulamento-fechar gui-icon gui-icon-close"></span>', a += '       <div class="popin-regulamento-scroll-y-area">', a += '           <h2 class="popin-regulamento-titulo">Regulamento</h2>', a += '           <div class="popin-regulamento-texto">' + this.textoRegulamento + "</div>", a += "       </div>", a += "   </div>", a += "</div>"
        }, o.prototype.show = function (a) {
            a.preventDefault();
            var t = a.data.Regulamento;
            _gaq.push(["_trackEvent", "Tabela", "Clique na pagina | Regulamento", "Clique no regulamento", 0, !0]), t.$body.append(t.$popin).addClass("popin-regulamento-desabilita-scroll"), t.$popin.on("click", ".popin-regulamento-wrapper, .popin-regulamento-fechar", {Regulamento: t}, t.hide)
        }, o.prototype.hide = function (a) {
            a.preventDefault();
            var t = a.data.Regulamento;
            t.$popin.off("click", ".popin-regulamento-wrapper, .popin-regulamento-fechar", t.hide), t.$popin.remove(), t.$body.removeClass("popin-regulamento-desabilita-scroll")
        }, a.Regulamento = o
    }(window, jQuery)
}, function (a, t) {
    "use strict";
    !function (a, t) {
        var e = function (a, e) {
            this.stillLoading = !1, this.nomeId = "tabela-loading", this.$loading = t('<div id="' + this.nomeId + '"><img src="//s.glbimg.com/es/ge/static/live/globoesporte/img/ajax-loader.gif"></div>'), this.$container = a, this.$elementToHide = e, this.$loading.css({
                left: "50%",
                "margin-left": -16,
                position: "absolute",
                top: 160,
                "z-index": 10
            })
        };
        a.Loading = e
    }(window, jQuery)
}, function (a, t) {
    "use strict";
    !function (a, t) {
        var e = function (e) {
            this.$navegador = e, 1 === this.$navegador.length && (this.$tabelasContainer = t("#container-para-tabela-simulador-ou-navegacao-js"), this.$seletorLista = this.$navegador.find(".tabela-navegacao-seletor"), this.$seletorAtual = this.$navegador.find(".tabela-navegacao-seletor-ativo"), this.$setaAnterior = this.$navegador.find(".tabela-navegacao-anterior"), this.$setaProximo = this.$navegador.find(".tabela-navegacao-proximo"), this.$listaDeFases = this.$navegador.find(".fases-popin"), this.$itemFase = this.$listaDeFases.find("li"), this.loader = new a.Loading(t("#widget-classificacao"), this.$tabelasContainer), this.tratarSeletorAtual(), this.indiceTotal = parseInt(this.$navegador.data("fase-total"), 10) - 1, this.indiceAtual = parseInt(this.$seletorAtual.data("fase"), 10) - 1, this.carregandoFase = !1, this.setaAtivaClasse = "tabela-navegacao-setas-ativa", this.seletorAtivoClasse = "tabela-navegacao-seletor-ativo", this.alterarEstilosDasSetas(), this.$setaAnterior.on("click", {
                NavegacaoFases: this,
                irPara: -1
            }, this.alterarFase), this.$setaProximo.on("click", {
                NavegacaoFases: this,
                irPara: 1
            }, this.alterarFase), this.binds(), this.ancora())
        };
        a.NavegacaoFases = e
    }(window, jQuery)
}]);
;
