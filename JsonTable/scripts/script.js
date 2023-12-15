import addListeners from "../scripts/events.js";

const url = 'https://api.sampleapis.com/codingresources/codingResources'

async function getData(){
    await fetch(url).then(
        res => {
            res.json().then(
                data => {
                    console.log(data)
                    if (data.length > 0){

                        var temp= "";
                        data.forEach((item) => {
                            temp +=`
                                <tr>

                                    <td class="desc">${item.description}</td>`;


                                temp+=`
                                    <td><ul>`;
                                item.types.forEach(ty =>
                                    temp += `<li>${ty}</li>`)
                                temp+=`    
                                    </ul></td>`;


                                temp+=`
                                    <td><ul>`;
                                item.topics.forEach(to =>
                                    temp += `<li>${to}</li>`)
                                temp+=`    
                                    </ul></td>`;


                            temp+=` 

                                </tr>
                            `;
                        });
                        document.querySelector('#data').innerHTML = temp;

                        addListeners(document);
                    }
                }
            )
        }
    )
}

getData()

