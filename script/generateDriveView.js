function generateLink(getLink) {
    var link = getLink;
    if (link.includes("https://drive.google.com") && link.includes("id=")) {
        link = link.replace('export=download&', '');
        link = link.replace('uc', 'open');
        return link;
    }else{
        return '';
    }
}


jQuery(document).ready(function ($) {
    $('#show').click(function () {

        var link1 = generateLink(document.getElementById("firstLink").value);
        var link2 = generateLink(document.getElementById("secondLink").value);
        var link3 = generateLink(document.getElementById("thridLink").value);
        var link4 = generateLink(document.getElementById("fourthLink").value);
        var link5 = generateLink(document.getElementById("fifthLink").value);
        var link6 = generateLink(document.getElementById("sixthLink").value);

        if (link1 == "" && link2 == "" && link3 == "" && link4 == "" && link5 == "" && link6 == "") {
            M.toast({ html: 'Put at least a link !', classes: 'rounded red darken-2' });
        }

        else {

            if (link1 == "") {
                $('#link1').hide();
            } else {
                $("#link1").attr("href", link1);
                $('#link1').show();
            }

            if (link2 == "") {
                $('#link2').hide();
            } else {
                $("#link2").attr("href", link2);
                $('#link2').show();
            }

            if (link3 == "") {
                $('#link3').hide();
            } else {
                $("#link3").attr("href", link3);
                $('#link3').show();
            }

            if (link4 == "") {
                $('#link4').hide();
            } else {
                $("#link4").attr("href", link4);
                $('#link4').show();
            }

            if (link5 == "") {
                $('#link5').hide();
            } else {
                $("#link5").attr("href", link5);
                $('#link5').show();
            }

            if (link6 == "") {
                $('#link6').hide();
            } else {
                $("#link6").attr("href", link6);
                $('#link6').show();
            }

            $('.menu').show();
        }

    });
});