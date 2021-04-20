var num=1;
var reVal="";
var lang="";
var qKor = {
    1: {"title": "문제 1번", "A": "1선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    2: {"title": "문제 2번", "A": "2선택지", "B": "2선택지", "selA": "B", "selB": "A"},
    3: {"title": "문제 3번", "A": "3선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    4: {"title": "문제 4번", "A": "4선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    5: {"title": "문제 5번", "A": "5선택지", "B": "2선택지", "selA": "E", "selB": "C"},
    6: {"title": "문제 6번", "A": "6선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    7: {"title": "문제 7번", "A": "7선택지", "B": "2선택지", "selA": "F", "selB": "G"},
    8: {"title": "문제 8번", "A": "8선택지", "B": "2선택지", "selA": "G", "selB": "F"},
    9: {"title": "문제 9번", "A": "9선택지", "B": "2선택지", "selA": "F", "selB": "G"}
}
var qEng = {
    1: {"title": "Q1번", "A": "1선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    2: {"title": "Q2번", "A": "2선택지", "B": "2선택지", "selA": "B", "selB": "A"},
    3: {"title": "Q3번", "A": "3선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    4: {"title": "Q4번", "A": "4선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    5: {"title": "Q5번", "A": "5선택지", "B": "2선택지", "selA": "E", "selB": "C"},
    6: {"title": "Q6번", "A": "6선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    7: {"title": "Q7번", "A": "7선택지", "B": "2선택지", "selA": "F", "selB": "G"},
    8: {"title": "Q8번", "A": "8선택지", "B": "2선택지", "selA": "G", "selB": "F"},
    9: {"title": "Q9번", "A": "9선택지", "B": "2선택지", "selA": "F", "selB": "G"}
}
var qJap = {
    1: {"title": "質問 1번", "A": "1선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    2: {"title": "質問 2번", "A": "2선택지", "B": "2선택지", "selA": "B", "selB": "A"},
    3: {"title": "質問 3번", "A": "3선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    4: {"title": "質問 4번", "A": "4선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    5: {"title": "質問 5번", "A": "5선택지", "B": "2선택지", "selA": "E", "selB": "C"},
    6: {"title": "質問 6번", "A": "6선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    7: {"title": "質問 7번", "A": "7선택지", "B": "2선택지", "selA": "F", "selB": "G"},
    8: {"title": "質問 8번", "A": "8선택지", "B": "2선택지", "selA": "G", "selB": "F"},
    9: {"title": "質問 9번", "A": "9선택지", "B": "2선택지", "selA": "F", "selB": "G"}
}
var resultKor = {
    "ACF": {"member": "소노다 우미", "explain": "설명", "img": "umi.png"},
    "ACG": {"member": "니시키노 마키", "explain": "설명", "img": "maki.png"},
    "ADF": {"member": "야자와 니코", "explain": "설명", "img": "nico.png"},
    "ADG": {"member": "코이즈미 하나요", "explain": "설명", "img": "hanayo.png"},
    "AEF": {"member": "토죠 노조미", "explain": "설명", "img": "nozomi.png"},
    "AEG": {"member": "토도 에레나", "explain": "설명", "img": "erena.png"},
    "BCF": {"member": "미나미 코토리", "explain": "설명", "img": "kotori.png"},
    "BCG": {"member": "코우사카 호노카", "explain": "설명", "img": "honoka.png"},
    "BDF": {"member": "아야세 에리", "explain": "설명", "img": "eri.png"},
    "BDG": {"member": "유우키 안쥬", "explain": "설명", "img": "anzyu.png"},
    "BEF": {"member": "키라 츠바사", "explain": "설명", "img": "tsubasa.png"},
    "BEG": {"member": "호시조라 린", "explain": "설명", "img": "rin.png"}
}
var resultEng = {
    "ACF": {"member": "ㅇ소노다 우미", "explain": "설명", "img": "umi.png"},
    "ACG": {"member": "ㅇ니시키노 마키", "explain": "설명", "img": "maki.png"},
    "ADF": {"member": "ㅇ야자와 니코", "explain": "설명", "img": "nico.png"},
    "ADG": {"member": "ㅇ코이즈미 하나요", "explain": "설명", "img": "hanayo.png"},
    "AEF": {"member": "ㅇ토죠 노조미", "explain": "설명", "img": "nozomi.png"},
    "AEG": {"member": "ㅇ토도 에레나", "explain": "설명", "img": "erena.png"},
    "BCF": {"member": "ㅇ미나미 코토리", "explain": "설명", "img": "kotori.png"},
    "BCG": {"member": "ㅇ코우사카 호노카", "explain": "설명", "img": "honoka.png"},
    "BDF": {"member": "ㅇ아야세 에리", "explain": "설명", "img": "eri.png"},
    "BDG": {"member": "ㅇ유우키 안쥬", "explain": "설명", "img": "anzyu.png"},
    "BEF": {"member": "ㅇ키라 츠바사", "explain": "설명", "img": "tsubasa.png"},
    "BEG": {"member": "ㅇ호시조라 린", "explain": "설명", "img": "rin.png"}
}
var resultJap = {
    "ACF": {"member": "ㅂ소노다 우미", "explain": "설명", "img": "umi.png"},
    "ACG": {"member": "ㅂ니시키노 마키", "explain": "설명", "img": "maki.png"},
    "ADF": {"member": "ㅂ야자와 니코", "explain": "설명", "img": "nico.png"},
    "ADG": {"member": "ㅂ코이즈미 하나요", "explain": "설명", "img": "hanayo.png"},
    "AEF": {"member": "ㅂ토죠 노조미", "explain": "설명", "img": "nozomi.png"},
    "AEG": {"member": "ㅂ토도 에레나", "explain": "설명", "img": "erena.png"},
    "BCF": {"member": "ㅂ미나미 코토리", "explain": "설명", "img": "kotori.png"},
    "BCG": {"member": "ㅂ코우사카 호노카", "explain": "설명", "img": "honoka.png"},
    "BDF": {"member": "ㅂ아야세 에리", "explain": "설명", "img": "eri.png"},
    "BDG": {"member": "ㅂ유우키 안쥬", "explain": "설명", "img": "anzyu.png"},
    "BEF": {"member": "ㅂ키라 츠바사", "explain": "설명", "img": "tsubasa.png"},
    "BEG": {"member": "ㅂ호시조라 린", "explain": "설명", "img": "rin.png"}
}
window.onload=function () {
    lang=navigator.language;
    setLanguage(lang);
    $(".language2").hide();
}
function start() {
    $(".start").hide();
    $(".question").show();
    next();
}
$("#btnA").click(function() {
    var select = ($("#selectA").val());
    var preValue = $("#"+select).val();
    $("#"+select).val(parseInt(preValue)+1);
    next();
});
$("#btnB").click(function() {
    var select = ($("#selectB").val());
    var preValue = $("#"+select).val();
    $("#"+select).val(parseInt(preValue)+1);
    next();
});
function next() {
    if (num == 10) {
        $(".question").hide();
        $(".language").hide();
        $(".language2").show();
        $(".result").show();
        if ($("#A").val() > 1){
            reVal+="A";
        }
        if ($("#B").val() > 1){
            reVal+="B";
        }
        if ($("#E").val() > 0){
            reVal+="E";
        }
        else{
            if ($("#C").val() > 1){
                reVal+="C";
            }
            else {
                reVal+="D";
            }
        }
        if ($("#F").val() > 1){
            reVal+="F";
        }
        if ($("#G").val() > 1){
            reVal+="G";
        }
        chgtextRe();
    } else {
        $(".progress-bar").attr('style','width: calc(100/9*'+num+'%)');
        chgtext();
        num++;
    }
}
function chgtext(){
    if (lang == "ko"){
        $("#title").html(qKor[num]["title"]);
        $("#btnA").html(qKor[num]["A"]);
        $("#btnB").html(qKor[num]["B"]);
        $("#selectA").val(qKor[num]["selA"]);
        $("#selectB").val(qKor[num]["selB"]);
    }
    if (lang == "en"){
        $("#title").html(qEng[num]["title"]);
        $("#btnA").html(qEng[num]["A"]);
        $("#btnB").html(qEng[num]["B"]);
        $("#selectA").val(qEng[num]["selA"]);
        $("#selectB").val(qEng[num]["selB"]);
    }
    if (lang == "ja"){
        $("#title").html(qJap[num]["title"]);
        $("#btnA").html(qJap[num]["A"]);
        $("#btnB").html(qJap[num]["B"]);
        $("#selectA").val(qJap[num]["selA"]);
        $("#selectB").val(qJap[num]["selB"]);
    }
}
function chgtextRe(){
    if (lang == "ko"){
        $("#resultImg").attr("src", resultKor[reVal]["img"]);
        $("#member").html(resultKor[reVal]["member"]);
        $("#explain").html(resultKor[reVal]["explain"]);
    }
    if (lang == "en"){
        $("#resultImg").attr("src", resultEng[reVal]["img"]);
        $("#member").html(resultEng[reVal]["member"]);
        $("#explain").html(resultEng[reVal]["explain"]);
    }
    if (lang == "ja"){
        $("#resultImg").attr("src", resultJap[reVal]["img"]);
        $("#member").html(resultJap[reVal]["member"]);
        $("#explain").html(resultJap[reVal]["explain"]);
    }
}
$.lang = {};
$.lang.ko = {
    0: '나와 닮은 러브라이브 멤버는?',
	1: '나와 닮은 뮤즈/아라이즈 멤버',
	2: '테스트 시작하기'
};
$.lang.en = {
    0: 'Who is like me?',
	1: 'Lovelive member who looks like me',
	2: 'Start'
};
$.lang.ja = {
    0: '僕と似ているメンバーは誰？',
	1: '僕と似ているメンバー',
	2: 'テストを始める'
};
function setLanguage(currentLanguage) {
    $('[data-langNum]').each(function() {
        var $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langnum')]);
    });
}
$("#lang1").click(function() {
    lang = $(this).data('lang');
    setLanguage(lang);
    chgtext();
});
$("#lang2").click(function() {
    lang = $(this).data('lang');
    setLanguage(lang);
    chgtext();
});
$("#lang3").click(function() {
    lang = $(this).data('lang');
    setLanguage(lang);
    chgtext();
});
$("#lang4").click(function() {
    lang = $(this).data('lang');
    setLanguage(lang);
    chgtextRe();
});
$("#lang5").click(function() {
    lang = $(this).data('lang');
    setLanguage(lang);
    chgtextRe();
});
$("#lang6").click(function() {
    lang = $(this).data('lang');
    setLanguage(lang);
    chgtextRe();
});