// Central team data for the RFL site. Edit data/teams.json, not the pages.
// Usage: <script src="../data/teams.js"></script>, then RFL.ready.then(...)
(function () {
    var base = document.currentScript.src.replace(/teams\.js(\?.*)?$/, '');

    function pct(t) {
        var g = t.wins + t.losses;
        return g ? Math.round((t.wins / g) * 100) + '%' : 'N/A';
    }

    var RFL = window.RFL = {
        teams: [],
        team: function (id) {
            return RFL.teams.filter(function (t) { return t.id === id; })[0];
        },
        winPct: pct,
        // Teams sorted by a numeric field, highest first, nulls dropped. Ties share a rank ("T-8.").
        top: function (field, n) {
            var list = RFL.teams.filter(function (t) { return t[field] != null; })
                .sort(function (a, b) { return b[field] - a[field]; }).slice(0, n || 10);
            return list.map(function (t) {
                var same = list.filter(function (o) { return o[field] === t[field]; }).length > 1;
                var rank = list.filter(function (o) { return o[field] > t[field]; }).length + 1;
                return { rank: (same ? 'T-' : '') + rank, team: t, value: t[field] };
            });
        },
        renderTeamInfo: function (el, id) {
            var t = RFL.team(id);
            if (!t) { return; }
            var row = function (label, val) {
                return '<br /><strong>' + label + ': </strong>' + val;
            };
            var list = function (a) { return a && a.length ? a.join(', ') : 'N/A'; };
            el.innerHTML =
                '<p><strong>Owner: </strong>' + t.owner +
                row('Co-Manager', t.coManager || 'N/A') +
                row('Year joined', t.yearJoined) + '</p>' +
                '<p><strong>Former Co-Managers: </strong>' + (t.formerCoManagers || 'N/A') +
                row('Former Team Names', t.formerNames || 'N/A') + '</p>' +
                '<p><strong>Championships: </strong>' + list(t.championships) +
                row('Other Awards', list(t.awards)) + '</p>' +
                '<p><strong>Career Record: </strong>' + t.wins + '-' + t.losses +
                row('Career Winning Percentage', pct(t)) +
                row('Playoff Percentage', t.playoffPct) +
                row('Finshes', list(t.finishes)) + '</p>';
        },
        renderRoster: function (el, id) {
            var t = RFL.team(id);
            if (!t) { return; }
            el.innerHTML = t.roster.map(function (r) { return r.pos + ': ' + r.player; }).join('<br />');
        }
    };

    RFL.ready = fetch(base + 'teams.json')
        .then(function (r) { return r.json(); })
        .then(function (d) { RFL.teams = d.teams; return RFL; })
        .catch(function (e) { console.error('Could not load teams.json', e); return RFL; });
})();
