var num = 1;
var q = {
    1: {"title": "냥냥멍멍뺙뺙", "A": "1선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    2: {"title": "문제 2번", "A": "2선택지", "B": "2선택지", "selA": "B", "selB": "A"},
    3: {"title": "문제 3번", "A": "3선택지", "B": "2선택지", "selA": "A", "selB": "B"},
    4: {"title": "문제 4번", "A": "4선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    5: {"title": "문제 5번", "A": "5선택지", "B": "2선택지", "selA": "E", "selB": "C"},
    6: {"title": "문제 6번", "A": "6선택지", "B": "2선택지", "selA": "C", "selB": "D"},
    7: {"title": "문제 7번", "A": "7선택지", "B": "2선택지", "selA": "F", "selB": "G"},
    8: {"title": "문제 8번", "A": "8선택지", "B": "2선택지", "selA": "G", "selB": "F"},
    9: {"title": "문제 9번", "A": "9선택지", "B": "2선택지", "selA": "F", "selB": "G"}
}
var result = {
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
        $(".result").show();
        var reVal="";
        if ($("#A").val() > 1){
            reVal+="A";
        }
        if ($("#B").val() > 1){
            reVal+="B";
        }
        if ($("E").val() == 0){
            if ($("C").val() > 1){
                reVal+="C";
            }
            else {
                reVal+="D";
            }
        }
        else {
            reVal+="E";
        }
        if ($("#F").val() > 1){
            reVal+="F";
        }
        if ($("#G").val() > 1){
            reVal+="G";
        }
        $("#resultImg").attr("src", result[reVal]["img"]);
        $("#member").html(result[reVal]["member"]);
        $("#explain").html(result[reVal]["explain"]);
    } else {
        $(".progress-bar").attr('style','width: calc(100/9*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#btnA").html(q[num]["A"]);
        $("#btnB").html(q[num]["B"]);
        $("#selectA").val(q[num]["selA"]);
        $("#selectB").val(q[num]["selB"]);
        num++;
    }
}