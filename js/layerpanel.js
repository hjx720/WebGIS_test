function createLayerPanel(panel, layergroups) {
    let div = document.getElementById(panel);

    let h1 = document.createElement('h1');
    h1.innerHTML = "Layer";
    div.appendChild(h1);

    for (let layergroup of layergroups) {
        let h2 = document.createElement('h2');
        h2.classList.add('layer-h2');
        h2.innerHTML = layergroup.get('title');
        div.appendChild(h2);

        let layer = layergroup.getLayers();
        let ul = document.createElement('ul');
        ul.classList.add('layer-ul');
        layer.forEach( (layer, index, array) => {
            let type = "checkbox";
            if (layer.get('type') == 'base') {
                type = 'radio';
            }

            let li = document.createElement('li');

            let input = document.createElement('input');
            input.type = type;
            input.value = layer.get('id');
            input.id = input.value;
            input.name = layergroup.get('id');
            if (layer.get('visible')) {
                input.defaultChecked = true;
            }

            input.addEventListener('change', () => {
                let layerElementValue = input.value;
                if (layer.get('type') == 'base') {
                    layergroup.getLayers().forEach( (layer, index, array) => {
                        layer.setVisible(layer.get('id') === layerElementValue);
                    })
                } else {
                    layergroup.getLayers().forEach( (layer, index, array) => {
                        if (layer.get('id') === layerElementValue) {
                            layer.setVisible(radio_checkbox.checked)
                        }
                    })
                }
            })

            let label = document.createElement('label');
            label.htmlFor = input.id;
            label.appendChild(input);
            let text = document.createTextNode(layer.get('title'));
            label.appendChild(text);

            li.appendChild(label);
            ul.appendChild(li);
        })

        div.appendChild(ul);
    }
}

export {createLayerPanel};
