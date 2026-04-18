(function () {
    var pageVideosLabel = window.pageVideosLabel || null;
    var pageVideosContent = window.pageVideosContent || null;

    var pageVideosItem = pageVideosLabel
        ? '<li class="dropdown">' +
          '<a href="javascript:void(0)" class="dropbtn">' + pageVideosLabel + '</a>' +
          '<div class="dropdown-content">' + pageVideosContent + '</div>' +
          '</li>'
        : '';

    var navHTML =
        '<div class="topnav"><ul>' +
        '<li><a href="./index.html">Home</a></li>' +
        '<li><a target="_blank" href="https://fantasy.nfl.com/league/4294191">League Home</a></li>' +
        '<li class="dropdown">' +
            '<a href="javascript:void(0)" class="dropbtn">Constitutions</a>' +
            '<div class="dropdown-content">' +
                '<a target="_blank" href="https://docs.google.com/document/d/1Ordo6iEAwmNMPma8bL7XhKjpG39hDVXmTds-g_Evo_Y/edit?usp=sharing">Redraft Constitution</a>' +
                '<a target="_blank" href="https://docs.google.com/document/d/1XL_mZfZFp3BuuPxZKAaj86ta0NUO0yCTxiirq7NWBGw/edit?usp=sharing">Dynasty Constitution</a>' +
            '</div>' +
        '</li>' +
        '<li class="dropdown">' +
            '<a href="javascript:void(0)" class="dropbtn">Teams</a>' +
            '<div class="dropdown-content">' +
                '<a href="./Dictator.html"><img src="./Prof Pic1.png" width="20px" /> The Dictator</a>' +
                '<a href="./Red Army.html"><img src="./brian logo.png" width="20px" /> The Red Army</a>' +
                '<a href="./Big Ounce.html"><img src="./big ounce logo.png" width="20px" /> Big Ounce</a>' +
                '<a href="./Gruden\'s Plan.html"><img src="./gruden logo.png" width="20px" /> Gruden\'s Plan</a>' +
                '<a href="./Maryland Marijuanas.html"><img src="./weed logo.jpg" width="20px" /> Maryland Marijuanas</a>' +
                '<a href="./Wentz Wagon.html"><img src="./wentz logo.png" width="20px" /> The Hurts Helicopter</a>' +
                '<a href="./Red Wolf.html"><img src="./jason logo.png" width="20px" /> Goofy God</a>' +
                '<a href="./Mullet Man.html"><img src="./Mullet Logo.png" width="20px" /> Mullet Man</a>' +
                '<a href="./Sleepy Nick.html"><img src="./nick logo.png" width="20px" /> Sleepy Nick</a>' +
                '<a href="./Wack Attacks.html"><img src="./zach logo.jpg" width="20px" /> Wack Attacks</a>' +
            '</div>' +
        '</li>' +
        '<li><a href="./Past Teams.html">Former Teams</a></li>' +
        '<li><a href="./draft.html">Drafts</a></li>' +
        pageVideosItem +
        '<li class="dropdown">' +
            '<a href="javascript:void(0)" class="dropbtn">League Videos</a>' +
            '<div class="dropdown-content">' +
                '<a href="https://youtu.be/I5AjigexrEU">2021 RFL Draft</a>' +
                '<a href="https://youtu.be/hTfTKxbhBHc">Announcing Our 10th and Final RFL Member For 2021!</a>' +
                '<a href="https://youtu.be/89NbZ0oGmTQ">2021 State of the League Address</a>' +
                '<a href="https://youtu.be/oua0MqRtpLg">The Red Army\'s 2020 Punishment</a>' +
                '<a href="https://youtu.be/5dfQiQEzpYM">2020 Waterbets</a>' +
                '<a href="https://youtu.be/_btkqdhmESU">2020 Exit Interviews</a>' +
                '<a href="https://youtu.be/Ap3etxqNsV4">Our 2020 Draft</a>' +
                '<a href="https://youtu.be/gpnV7FCJTdg">Draft Day 2020 Hype Video</a>' +
                '<a href="https://www.youtube.com/watch?v=801p3bd-SEk">2019 Exit Interviews</a>' +
                '<a href="https://youtu.be/i6lJSjG6js8">Our 2019 Draft</a>' +
                '<a href="https://youtu.be/YFUnB669-rE">2019 Commish Annoucement</a>' +
            '</div>' +
        '</li>' +
        '<li><a href="./standings1.html">Standings</a></li>' +
        '<li><a href="./records.html">Records</a></li>' +
        '<li><a href="./Hall of Fame.html">Hall of Fame</a></li>' +
        '<li><a href="./Mock Draft.html">Mock Draft</a></li>' +
        '</ul></div>';

    var container = document.getElementById('topnav-container');
    if (container) {
        container.outerHTML = navHTML;
    }
})();
