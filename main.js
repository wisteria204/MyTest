var num=0;
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
    "ACF": {"member": "소노다 우미", "explain": "", "img": "umi.png"},
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
    "ACF": {"member": "SONODA UMI", "explain": "설명", "img": "umi.png"},
    "ACG": {"member": "NISHIKINO MAKI", "explain": "설명", "img": "maki.png"},
    "ADF": {"member": "YAZAWA NICO", "explain": "설명", "img": "nico.png"},
    "ADG": {"member": "KOIZUMI HANAYO", "explain": "설명", "img": "hanayo.png"},
    "AEF": {"member": "TOJO NOZOMI", "explain": "설명", "img": "nozomi.png"},
    "AEG": {"member": "TODOERENA", "explain": "설명", "img": "erena.png"},
    "BCF": {"member": "MINAMI KOTORI", "explain": "설명", "img": "kotori.png"},
    "BCG": {"member": "KOSAKA HONOKA", "explain": "설명", "img": "honoka.png"},
    "BDF": {"member": "AYASE ELI", "explain": "설명", "img": "eri.png"},
    "BDG": {"member": "YUKI ANJU", "explain": "설명", "img": "anzyu.png"},
    "BEF": {"member": "KIRA TSUBASA", "explain": "설명", "img": "tsubasa.png"},
    "BEG": {"member": "HOSHIZORA RIN", "explain": "설명", "img": "rin.png"}
}
var resultJap = {
    "ACF": {"member": "園田 海未", "explain": "설명", "img": "umi.png"},
    "ACG": {"member": "西木野 真姫", "explain": "설명", "img": "maki.png"},
    "ADF": {"member": "矢澤 にこ", "explain": "설명", "img": "nico.png"},
    "ADG": {"member": "小泉 花陽", "explain": "설명", "img": "hanayo.png"},
    "AEF": {"member": "東條 希", "explain": "설명", "img": "nozomi.png"},
    "AEG": {"member": "統堂英玲奈", "explain": "설명", "img": "erena.png"},
    "BCF": {"member": "南 ことり", "explain": "설명", "img": "kotori.png"},
    "BCG": {"member": "高坂 穂乃果", "explain": "설명", "img": "honoka.png"},
    "BDF": {"member": "絢瀬 絵里", "explain": "설명", "img": "eri.png"},
    "BDG": {"member": "優木あんじゅ", "explain": "설명", "img": "anzyu.png"},
    "BEF": {"member": "綺羅ツバサ", "explain": "설명", "img": "tsubasa.png"},
    "BEG": {"member": "星空 凛", "explain": "설명", "img": "rin.png"}
}
window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
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
        num++;
        $(".progress-bar").attr('style','width: calc(100/9*'+num+'%)');
        chgtext();
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
window.onload=function () {
    lang=navigator.language;
    setLanguage(lang);
    $(".language2").hide();
}