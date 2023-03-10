/*!
* Snackbar v0.1.14
* https://timbaliseo.com/
*
* Copyright 2018 Chris Brame and other contributors
* Released under the MIT license
* https://github.com/polonel/Snackbar/blob/master/LICENSE
*/
!function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return a.Snackbar = b()
    }) : "object" == typeof module && module.exports ? module.exports = a.Snackbar = b() : a.Snackbar = b()
}(this, function() {
    var a = {};
    a.current = null;
    var b = {
        text: "Default Text",
        textColor: "#FFFFFF",
        width: "auto",
        showAction: !0,
        actionText: "Dismiss",
        actionTextAria: "Dismiss, Description for Screen Readers",
        alertScreenReader: !1,
        actionTextColor: "#4CAF50",
        showSecondButton: !1,
        secondButtonText: "",
        secondButtonAria: "Description for Screen Readers",
        secondButtonTextColor: "#4CAF50",
        backgroundColor: "#323232",
        pos: "bottom-left",
        duration: 5e3,
        customClass: "",
        onActionClick: function(a) {
            a.style.opacity = 0
        },
        onSecondButtonClick: function(a) {},
        onClose: function(a) {}
    };
    a.show = function(d) {
        var e = c(!0, b, d);
        a.current && (a.current.style.opacity = 0,
        setTimeout(function() {
            var a = this.parentElement;
            a && a.removeChild(this)
        }
        .bind(a.current), 500)),
        a.snackbar = document.createElement("div"),
        a.snackbar.className = "messagebleft-container " + e.customClass,
        a.snackbar.style.width = e.width;
        var f = document.createElement("p");
        if (f.style.margin = 0,
        f.style.padding = 0,
        f.style.color = e.textColor,
        f.style.fontSize = "14px",
        f.style.fontWeight = 300,
        f.style.lineHeight = "1em",
        f.innerHTML = e.text,
        a.snackbar.appendChild(f),
        a.snackbar.style.background = e.backgroundColor,
        e.showSecondButton) {
            var g = document.createElement("button");
            g.className = "action",
            g.innerHTML = e.secondButtonText,
            g.setAttribute("aria-label", e.secondButtonAria),
            g.style.color = e.secondButtonTextColor,
            g.addEventListener("click", function() {
                e.onSecondButtonClick(a.snackbar)
            }),
            a.snackbar.appendChild(g)
        }
        if (e.showAction) {
            var h = document.createElement("button");
            h.className = "action",
            h.innerHTML = e.actionText,
            h.setAttribute("aria-label", e.actionTextAria),
            h.style.color = e.actionTextColor,
            h.addEventListener("click", function() {
                e.onActionClick(a.snackbar)
            }),
            a.snackbar.appendChild(h)
        }
        e.duration && setTimeout(function() {
            a.current === this && (a.current.style.opacity = 0,
            a.current.style.top = "-100px",
            a.current.style.bottom = "-100px")
        }
        .bind(a.snackbar), e.duration),
        e.alertScreenReader && a.snackbar.setAttribute("role", "alert"),
        a.snackbar.addEventListener("transitionend", function(b, c) {
            "opacity" === b.propertyName && "0" === this.style.opacity && ("function" == typeof e.onClose && e.onClose(this),
            this.parentElement.removeChild(this),
            a.current === this && (a.current = null))
        }
        .bind(a.snackbar)),
        a.current = a.snackbar,
        document.body.appendChild(a.snackbar);
        getComputedStyle(a.snackbar).bottom,
        getComputedStyle(a.snackbar).top;
        a.snackbar.style.opacity = 1,
        a.snackbar.className = "messagebleft-container " + e.customClass + " messagebleft-pos " + e.pos
    }
    ,
    a.close = function() {
        a.current && (a.current.style.opacity = 0)
    }
    ;
    var c = function() {
        var a = {}
          , b = !1
          , d = 0
          , e = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (b = arguments[0],
        d++);
        for (var f = function(d) {
            for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (b && "[object Object]" === Object.prototype.toString.call(d[e]) ? a[e] = c(!0, a[e], d[e]) : a[e] = d[e])
        }; d < e; d++) {
            var g = arguments[d];
            f(g)
        }
        return a
    };
    return a
});
var nm = ["50.000", "60.000", "100.000", "120.000", "150.000", "180.000", "200.000", "240.000", "250.000", "300.000", "350.000", "360.000", "400.000", "420.000", "450.000", "480.000", "500.000", "540.000", "550.000", "600.000", "650.000", "660.000", "700.000", "720.000", "750.000", "780.000", "800.000", "840.000", "850.000", "900.000", "950.000", "960.000", "1.000.000", "1.020.000", "1.050.000", "1.080.000", "1.100.000", "1.140.000", "1.150.000", "1.200.000", "1.250.000", "1.260.000", "1.300.000", "1.320.000", "1.350.000", "1.380.000", "1.400.000", "1.440.000", "1.450.000", "1.500.000", "1.550.000", "1.600.000", "1.650.000", "1.700.000", "1.740.000", "1.750.000", "1.800.000", "1.850.000", "1.900.000", "1.950.000", "1.980.000", "2.000.000", "2.040.000", "2.050.000", "2.100.000", "2.150.000", "2.160.000", "2.200.000", "2.220.000", "2.250.000", "2.280.000", "2.300.000", "2.340.000", "2.350.000", "2.400.000", "2.450.000", "2.460.000", "2.500.000", "2.520.000", "2.550.000", "2.600.000", "2.640.000", "2.650.000", "2.700.000", "2.750.000", "2.800.000", "2.820.000", "2.850.000", "2.900.000", "2.940.000", "2.950.000", "3.000.000", "3.050.000", "3.060.000", "3.100.000", "3.120.000", "3.150.000", "3.200.000", "3.250.000", "3.300.000", "3.350.000", "3.360.000", "3.400.000", "3.420.000", "3.450.000", "3.500.000", "3.550.000", "3.600.000", "3.650.000", "3.660.000", "3.700.000", "3.720.000", "3.750.000", "3.780.000", "3.800.000", "3.840.000", "3.850.000", "3.900.000", "3.950.000", "4.000.000", "4.050.000", "4.100.000", "4.150.000", "4.200.000", "4.250.000", "4.260.000", "4.300.000", "4.320.000", "4.350.000", "4.380.000", "4.400.000", "4.440.000", "4.450.000", "4.500.000", "4.550.000", "4.600.000", "4.650.000", "4.680.000", "4.700.000", "4.740.000", "4.750.000", "4.800.000", "4.850.000", "4.900.000", "4.950.000", "5.000.000", "5.040.000", "5.050.000", "5.100.000", "5.150.000", "5.200.000", "5.250.000", "5.300.000", "5.350.000", "5.400.000", "5.450.000", "5.460.000", "5.500.000", "5.550.000", "5.580.000", "5.600.000", "5.640.000", "5.650.000", "5.750.000", "5.800.000", "5.820.000", "5.850.000", "5.880.000", "5.900.000", "5.940.000", "5.950.000", "6.000.000", "6.050.000", "6.060.000", "6.100.000", "6.150.000", "6.200.000", "6.250.000", "6.300.000", "6.350.000", "6.360.000", "6.400.000", "6.420.000", "6.450.000", "6.480.000", "6.500.000", "6.540.000", "6.550.000", "6.600.000", "6.650.000", "6.660.000", "6.700.000", "6.750.000", "6.800.000", "6.850.000", "6.900.000", "6.950.000", "6.960.000", "7.000.000", "7.020.000", "7.050.000", "7.080.000", "7.100.000", "7.150.000", "7.200.000", "7.250.000", "7.300.000", "7.350.000", "7.400.000", "7.450.000", "7.500.000", "7.550.000", "7.560.000", "7.600.000", "7.600.000", "7.650.000", "7.700.000", "7.750.000", "7.800.000", "7.850.000", "7.900.000", "7.950.000", "7.980.000", "8.000.000", "8.050.000", "8.100.000", "8.150.000", "8.160.000", "8.200.000", "8.220.000", "8.250.000", "8.280.000", "8.300.000", "8.340.000", "8.350.000", "8.400.000", "8.450.000", "8.460.000", "8.500.000", "8.520.000", "8.550.000", "8.580.000", "8.600.000", "8.640.000", "8.650.000", "8.700.000", "8.750.000", "8.760.000", "8.800.000", "8.820.000", "8.850.000", "8.880.000", "8.900.000", "8.940.000", "8.950.000", "9.000.000", "9.050.000", "9.060.000", "9.100.000", "9.120.000", "9.150.000", "9.180.000", "9.200.000", "9.240.000", "9.250.000", "9.300.000", "9.350.000", "9.360.000", "9.400.000", "9.420.000", "9.450.000", "9.480.000", "9.500.000", "9.540.000", "9.550.000", "9.600.000", "9.650.000", "9.660.000", "9.700.000", "9.720.000", "9.750.000", "9.780.000", "9.800.000", "9.840.000", "9.850.000", "9.900.000", "9.950.000", "10.000.000"];
var pp = ["W***a", "Pur***ma", "S***nto", "Kus***a", "Su***rto", "Ag***im", "W***y", "Ja***ng", "Cand***a", "Tet*****sa", "M***ael", "Solo***", "Tarih***", "Eth***a", "Si***ng", "Ad***", "Pur***ma", "Se****an", "Iv***", "Chan***", "Ben***", "Sur***", "Kus***o", "Lima***dau", "Qu***", "Kusum***a", "Pe***", "J***es", "Re***aan", "Tobi***s", "Sibu*****n", "Jo********h", "Tine***ng", "La***us", "Ul***di", "Sla***et", "Ka***h", "Le******ari", "Mak***r", "Yuli***a", "I***n", "At***ja", "San***oso", "Yu***k", "Wid***o", "Hui***g", "Ro***inde", "Tuh***ena", "Tir***h", "La***a", "Orp***", "R***u", "Sa***i", "Ja***ata", "D***n", "Tu***in***ah", "Pu***i", "De***i", "Tanu******ja", "Shv***a", "Ca***ya", "At***ja", "Ba***run", "L***ing", "Bud***n", "Hwe***u", "Ag***ha", "Latu***rissa", "Li***apat", "Op***ah", "Pan***ayang", "Zi***ung", "Les***i", "S***nem", "Yu***", "Ya***i", "K***jaya", "Y***ti", "Fann***ana", "Ben***in", "Zhen***en", "Xiu***ng", "Gise*****seph", "Ata***sunggu", "Mary Sinu***i", "Dorca***an", "Le***ri", "Be***ari", "Vera***ti", "Rat***ari", "Dar***i", "Sos***ng", "Tejaruk***qin", "Kimb***e", "Ti***ey", "Jew***ang", "Ev***gian", "Tal***ha", "Nah***un", "E***o", "Sur***i", "Ra***trun", "Ann***t", "Ev***vianti", "Dessit***dah", "Ani***iny", "Ar***ilah", "N***aningra", "Au***anto", "Chri***nto", "Agu***ad", "Na***iza", "Stef***an", "Tif***ky", "Serv***tria", "Zar***llah", "Perm***i***ndo", "Ani***na", "Pabr***anto", "Gal***ka", "Sar***ag", "Anindy***nora", "Ris***iati", "Dy***odir", "Jani***lia", "Ir****ita", "Choiru***ya", "Fit***y", "Av***sty", "Sylv***ashaty", "Desya***rta", "Anggi***wanto", "Sy***aniy", "Ast***na", "Dev***sa", "Tr***hory", "O***ia", "Yas***nda", "Suaida***an", "Nin***sih", "Putr***o", "Rayh***mu", "H***eska", "Um***hati", "Diaj***ni", "Ab***ntin", "Lu***anto", "Wiw***udia", "As***ung", "Ran***ayakti", "Anast***dien", "Han***tra", "Assal******indya", "Sora***", "There***tanto", "Rai***hayu", "Ne***yah", "As***an", "Ra***dy", "Au***msyum", "Cit***ah", "Tif***idi", "Ta***ara", "Ath***wah", "Su***uli", "Ju***ha", "Ati***a", "Tri***wan", "Dia***ida", "Vini***lina", "E***o", "Ekk***ing", "Au***kasari", "Hiz***ah", "Al***ia", "Ag***iz", "Om***ani", "Reyn***oga", "De******anti", "Lint***onica", "Fatahi*****ngra", "Ada***gsih", "Rez***tarqi", "Beckl***yah", "Ar***dah", "Wahy***nna", "Edw***ti", "Hilm***dianti", "Fa***unnisa", "Am****yanto", "Hizr***ay", "Kev***ia", "Sut***astuti", "Ha***isa", "Giv***yugo", "Mifta***ha", "Ma***rina", "F***silia", "Luk***mud", "Y***anda", "Fahdn***ati"];
setInterval(myTimer, 10000);
function myTimer() {
    const rndmnm = Math.floor(Math.random() * nm.length);
    const rndmpp = Math.floor(Math.random() * pp.length);
    Snackbar.show({
        text: pp[rndmpp] + ' telah berhasil WD sebesar ' + nm[rndmnm],
        pos: 'top-left',
        showAction: false,
        backgroundColor: '#ffffff',
        textColor: '#323232',
        customClass: 'messagebleft',
        duration: 3000
    })
}
