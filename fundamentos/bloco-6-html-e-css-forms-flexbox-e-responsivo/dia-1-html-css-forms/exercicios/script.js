const estados = [['AC',	'Acre'],
['AL',	'Alagoas'],
['AP',	'Amapá'],
['AM',	'Amazonas'],
['BA',	'Bahia'],
['CE',	'Ceara'],
['DF',	'Distrito Federal'],
['ES',	'Espírito Santo'],
['GO',	'Goiás'],
['MA',	'Maranhão'],
['MT',	'Mato Grosso'],
['MS',	'Mato Grosso do Sul'],
['MG',	'Minas Gerais'],
['PA',	'Pará'],
['PB',	'Paraíba'],
['PR',	'Paraná'],
['PE',	'Pernambuco'],
['PI',	'Piauí'],
['RJ',	'Rio de Janeiro'],
['RN',	'Rio Grande do Norte'],
['RS',	'Rio Grande do Sul'],
['RO',	'Rondônia'],
['RR',	'Roraima'],
['SC',	'Santa Catarina'],
['SP',	'São Paulo'],
['SE',	'Sergipe'],
['TO',	'Tocantins']];

const select = document.querySelector('select');
const btn = document.querySelector('#btn-enviar');


function criaOption(value, txt,  pai )
{
    let item = document.createElement('option');
    item.value = value.toLowerCase();
    item.innerText = txt;
    pai.appendChild(item);
}

for (let x = 0; x < estados.length; x++)
{
    criaOption(estados[x][0], estados[x][1], select);
}