        const tameshi=document.getElementById('tamesi2');
        const botann=document.getElementById('botan');
        const re=document.getElementById('result-area')
        const res=document.getElementById('result-area2')
        tameshi.onkeydown=event=>{
         if(event.key==='Enter'){
            botann.onclick();
         }
        };
        botann.onclick = ()=>{
            const x=tameshi.value;
            const l=x.length;
            if (x==1 || x<=0){
                re.innerText="";
                res.innerText="";
                const paragraph=document.createElement('p');
                const result=(x + "は素数ではありません");
                paragraph.innerText=result;
                re.appendChild(paragraph);
                return;
            }
            if (isNaN(x)){
                re.innerText="";
                res.innerText="";
                const paragraph=document.createElement('p');
                const result=("自然数を入力してください");
                paragraph.innerText=result;
                re.appendChild(paragraph);
                return;
            }
            if (l===0){
                return;
            }
            const y=Math.sqrt(x);
            const z=Math.floor(y);
            let a=[2];
            let b=3;
            abc();
            function abc(){
                let i=0;
                let sqrt=Math.sqrt(b);
                let floor=Math.floor(sqrt);
                abcd();
                function abcd(){
                    const element = a[i];
                    let o=b/element;
                    let ok=Math.floor(o);
                    if(b>z){
                        let i=0;
                        abd();
                    } else if (ok!==o && floor>=element){
                        i++;
                        abcd();
                    } else if(floor<element){
                        a.push(b);
                        let i=0;
                        b++;
                        abc();
                    } else if(ok===o){
                        b++;
                        let i=0;
                        abc();
                    }
                }
                function abd(){
                    let b=x;
                    const element=a[i];
                    let o=b/element;
                    let ok=Math.floor(o);
                    if(i===a.length){
                        re.innerText="";
                        res.innerText="";
                        const paragraph=document.createElement('p');
                        const result=(b + "は素数です");
                        paragraph.innerText=result;
                        re.appendChild(paragraph);
                    } else if(ok===o){
                        re.innerText="";
                        res.innerText="";
                        const paragraph=document.createElement('p');
                        const result=(b + "は素数ではありません");
                        paragraph.innerText=result;
                        re.appendChild(paragraph);
                        const para=document.createElement('p');
                        const resu=("最小の素因数は" + element + "になります。");
                        para.innerText=resu;
                        res.appendChild(para);
                    } else if(ok!==o){
                        i++;
                        abd();
                    }
                }
            }
        }
