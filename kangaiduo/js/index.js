$(function () {
            class daohang {
                constructor(data) {
                    this.data = data;
                    // console.log(this.data)
                }
                init() {
                    this.rannav()
                    this.rannav2()
                }
                rannav() {
                    this.data.forEach((e, index) => {
                        // console.log(index)
                        var html = '';

                       
                        html = `<li><div class="list_t">
                    <a href="" class="nav-list-1">${e.bigTitle[0]}</a>|
                    <a href="" class="nav-list-2">${e.bigTitle[1]}</a>
                    <a href="">${e.bigTitle[2]}</a>
                        </div>             
                     </li>`
                        $('.nav-l-b').append(html)
                    })
                    
                }
                rannav2() {
                    this.data.forEach((e, index) => {
                        var html1 = '';
                        // console.log(e);
                        e.bigList.map((element,index)=>{
                            // console.log(element.list[index]);
                           html1 = ` <dl>
                           <dt>
                               <a href="">${element.title}</a>
                           </dt>
                           <dd >${
                            e.bigList.map((ele,index)=>{
                                console.log(ele.list[index]);
                               return` |<a href="">${ele.list}</a>`
                            })
                           }
                         </dd>
                        </dl>`
                        })
                        
                    })
                }
            }
            
            let kang = new daohang();

            $.getJSON("../js/data3.json", json => (new daohang(json)).init());
            // console.log(data)

        })