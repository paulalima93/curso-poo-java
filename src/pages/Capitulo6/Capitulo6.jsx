import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo6.css";

function Capitulo6() {
  const questions = [
    {
      question: "O que é um array em Java?",
      options: [
        "Uma variável que armazena um único valor",
        "Uma estrutura que permite armazenar múltiplos valores do mesmo tipo",
        "Um tipo de método especial",
        "Um objeto abstrato que não pode ser usado"
      ],
      correct: "Uma estrutura que permite armazenar múltiplos valores do mesmo tipo"
    },
    {
      question: "Qual a principal diferença entre Array e ArrayList?",
      options: [
        "ArrayList só armazena números, Array armazena qualquer coisa",
        "Array tem tamanho fixo, ArrayList pode crescer dinamicamente",
        "Não há diferença",
        "ArrayList é mais lento que Array sempre"
      ],
      correct: "Array tem tamanho fixo, ArrayList pode crescer dinamicamente"
    },
    {
      question: "Como acessar o terceiro elemento de um array chamado numeros?",
      options: [
        "numeros[2]",
        "numeros[3]",
        "numeros.get(3)",
        "numeros.get(2)"
      ],
      correct: "numeros[2]"
    },
    {
      question: "Qual método do ArrayList adiciona um elemento ao final da lista?",
      options: ["add()", "insert()", "push()", "append()"],
      correct: "add()"
    },
    {
      question: "O que acontece se tentarmos acessar uma posição inexistente de um array?",
      options: [
        "Java cria automaticamente a posição",
        "O programa lança uma exceção ArrayIndexOutOfBoundsException",
        "Nada acontece",
        "O programa substitui o último elemento"
      ],
      correct: "O programa lança uma exceção ArrayIndexOutOfBoundsException"
    }
  ];

  return (
    <div className="page capitulo6">
      <h1>Capítulo 6: Arrays, ArrayLists e Coleções em Java</h1>

      <section>
        <h2>O que são Arrays?</h2>
        <p>
          Um <strong>array</strong> é uma estrutura de dados que permite armazenar múltiplos valores do mesmo tipo em uma única variável. Cada valor armazenado é chamado de <em>elemento</em>, e cada elemento pode ser acessado usando um índice, que começa em <code>0</code>.
        </p>
        <p>
          Arrays têm tamanho fixo, definido no momento da criação. Isso significa que você precisa saber quantos elementos irá armazenar antecipadamente. Se quiser coleções que cresçam dinamicamente, use classes como <strong>ArrayList</strong>.
        </p>

        <h3>Exemplo em Java - Array de Números</h3>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`// Criando um array de inteiros com 5 posições
int[] numeros = new int[5];

// Atribuindo valores
numeros[0] = 10;
numeros[1] = 20;
numeros[2] = 30;
numeros[3] = 40;
numeros[4] = 50;

// Acessando valores
System.out.println("O terceiro número é: " + numeros[2]); // 30

// Percorrendo o array com loop tradicional
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento " + i + ": " + numeros[i]);
}

// Percorrendo o array com enhanced for (for-each)
for (int num : numeros) {
    System.out.println("Valor: " + num);
}`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>O que são ArrayLists?</h2>
        <p>
          <strong>ArrayList</strong> é uma classe da biblioteca de coleções do Java que permite criar listas dinâmicas de objetos. Diferente do array, você não precisa definir o tamanho inicialmente, e ele cresce ou diminui automaticamente conforme adicionamos ou removemos elementos.
        </p>
        <p>
          ArrayLists são objetos, então eles usam métodos para manipulação de dados, como <code>add()</code>, <code>remove()</code>, <code>get()</code> e <code>size()</code>. Eles só armazenam objetos, então tipos primitivos como <code>int</code> precisam ser "embrulhados" em classes como <code>Integer</code> (autoboxing).
        </p>

        <h3>Exemplo em Java - ArrayList de Strings</h3>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`import java.util.ArrayList;

ArrayList<String> nomes = new ArrayList<>();

// Adicionando elementos
nomes.add("Maria");
nomes.add("João");
nomes.add("Ana");

// Acessando elementos
System.out.println("Primeiro nome: " + nomes.get(0)); // Maria

// Percorrendo a lista com for tradicional
for (int i = 0; i < nomes.size(); i++) {
    System.out.println("Nome " + i + ": " + nomes.get(i));
}

// Percorrendo a lista com enhanced for
for (String nome : nomes) {
    System.out.println("Nome: " + nome);
}

// Removendo elemento
nomes.remove("João");
System.out.println("Lista após remoção: " + nomes);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Diferenças entre Array e ArrayList</h2>
        <ul>
          <li>
            <strong>Array:</strong> tamanho fixo, pode armazenar tipos primitivos ou objetos, menos flexível, acessado via índice.
          </li>
          <li>
            <strong>ArrayList:</strong> tamanho dinâmico, armazena apenas objetos, métodos prontos para manipulação (<code>add()</code>, <code>remove()</code>, <code>get()</code>, <code>size()</code>), ideal para coleções que mudam de tamanho.
          </li>
          <li>
            ArrayList utiliza **autoboxing** para tipos primitivos e pode ser percorrido com **for-each**, tornando o código mais limpo e seguro.
          </li>
        </ul>
      </section>

      <section>
        <h2>Outras coleções importantes</h2>
        <p>
          Além de <strong>ArrayList</strong>, o Java possui outras coleções úteis:
        </p>
        <ul>
          <li><strong>LinkedList:</strong> lista ligada, eficiente para inserções e remoções no meio da lista.</li>
          <li><strong>HashSet:</strong> conjunto de elementos únicos, sem ordem específica.</li>
          <li><strong>HashMap:</strong> coleção de pares chave-valor.</li>
        </ul>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie um array de inteiros com 10 elementos. Preencha com valores aleatórios e exiba todos os elementos usando loop tradicional e enhanced for.
          </li>
          <li>
            Crie um <strong>ArrayList</strong> de nomes de alunos. Adicione pelo menos 5 nomes e remova um. Percorra a lista exibindo os nomes restantes.
          </li>
          <li>
            Crie uma lista de objetos <strong>Produto</strong> (atributos: nome e preço). Adicione 3 produtos e exiba nome e preço de cada um usando ArrayList.
          </li>
          <li>
            Explique a diferença entre array e ArrayList, incluindo quando é melhor usar cada um.
          </li>
        </ol>
      </section>

      <section>
        <h2>Quiz - Teste seus conhecimentos</h2>
        <Quiz questions={questions} />
      </section>
    </div>
  );
}

export default Capitulo6;
