class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const brinquedosPessoa1Array = brinquedosPessoa1.split(',');
    const brinquedosPessoa2Array = brinquedosPessoa2.split(',');
    const ordemAnimaisArray = ordemAnimais.split(',');

    const animais = {
      'Rex': { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
      'Mimi': { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
      'Fofo': { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
      'Zero': { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
      'Bola': { tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
      'Bebe': { tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
      'Loco': { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
    };
    
    const resultado = [];
    let animaisAdotadosPessoa1 = 0;
    let animaisAdotadosPessoa2 = 0;

    const verificaBrinquedos = (brinquedosPessoa, brinquedosAnimal) => {
      let indexBrinquedoPessoa = 0;
      let matches = 0;
      for (const brinquedoAnimal of brinquedosAnimal) {
        let encontrado = false;
        for (let i = indexBrinquedoPessoa; i < brinquedosPessoa.length; i++) {
          if (brinquedosPessoa[i] === brinquedoAnimal) {
            indexBrinquedoPessoa = i + 1;
            matches++;
            encontrado = true;
            break;
          }
        }
        if (!encontrado) {
          return false;
        }
      }
      return matches === brinquedosAnimal.length;
    };

    for (const nomeAnimal of ordemAnimaisArray) {
      const animalAtual = animais[nomeAnimal];
      if (!animalAtual) {
        return { erro: 'Animal inválido' };
      }

      let pessoa1Apta = false;
      let pessoa2Apta = false;

      if (animaisAdotadosPessoa1 < 3) {
        pessoa1Apta = verificaBrinquedos(brinquedosPessoa1Array, animalAtual.brinquedos);
      }
      if (animaisAdotadosPessoa2 < 3) {
        pessoa2Apta = verificaBrinquedos(brinquedosPessoa2Array, animalAtual.brinquedos);
      }
      
      if (animalAtual.tipo === 'jabuti') {
          pessoa1Apta = false;
          pessoa2Apta = false;
      }

      if (pessoa1Apta && pessoa2Apta) {
        resultado.push(`${nomeAnimal} - abrigo`);
      } else if (pessoa1Apta) {
        resultado.push(`${nomeAnimal} - pessoa 1`);
        animaisAdotadosPessoa1++;
      } else if (pessoa2Apta) {
        resultado.push(`${nomeAnimal} - pessoa 2`);
        animaisAdotadosPessoa2++;
      } else {
        resultado.push(`${nomeAnimal} - abrigo`);
      }
    }
    
    resultado.sort();
    return { lista: resultado };
  }
}

export { AbrigoAnimais as AbrigoAnimais };