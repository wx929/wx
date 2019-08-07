$(function() {
    class loucen {
        constructor(data) {
            this.data = data;
        }
        init() {
            // this.creaHTML()
        }
        creaHTMLl() {
            let html2 = this.data[0].map(element => {
                return `
            
                
               `
                return html;
            }).join('');

            // console.log(html2)
            // $(".goodbody .content").html(html2);
        }
        creaHTML
    }

    $.getJSON("../js/loucen-l.json", json => (new loucen(json)).init());
})