import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo7.css";

function Capitulo7() {
  const questions = [
    {
      question: "O que é um HashMap em Java?",
      options: [
        "Uma lista ordenada de elementos",
        "Uma coleção de pares chave-valor",
        "Uma estrutura de dados de tamanho fixo",
        "Um tipo especial de array"
      ],
      correct: "Uma coleção de pares chave-valor"
    },
    {
      question: "Qual método do HashMap adiciona ou atualiza um elemento?",
      options: ["put()", "add()", "insert()", "set()"],
      correct: "put()"
    },
    {
      question: "O HashMap permite chaves duplicadas?",
      options: ["Sim, mas valores devem ser únicos", "Não, cada chave deve ser única", "Sim, sem restrições", "Não, nem valores duplicados"],
      correct: "Não, cada chave deve ser única"
    },
    {
      question: "Como percorrer todos os elementos de um HashMap?",
      options: [
        "Com loop for-each usando entrySet()",
        "Somente com for tradicional",
        "Não é possível percorrer",
        "Usando getAll()"
      ],
      correct: "Com loop for-each usando entrySet()"
    },
    {
      question: "Qual é a diferença principal entre HashMap e TreeMap?",
      options: [
        "HashMap mantém ordem, TreeMap não",
        "TreeMap mantém ordem crescente das chaves, HashMap não mantém ordem",
        "Não há diferença",
        "HashMap é mais lento que TreeMap sempre"
      ],
      correct: "TreeMap mantém ordem crescente das chaves, HashMap não mantém ordem"
    }
  ];

  return (
    <div className="page capitulo7">
      <h1>Capítulo 7: Mapas, HashMaps e Coleções Avançadas</h1>

      <section>
        <h2>O que são Mapas (Maps) em Java?</h2>
        <p>
          Um <strong>Map</strong> é uma coleção de elementos que trabalha com <em>pares chave-valor</em>. Cada chave é única e está associada a um valor. Mapas são úteis quando precisamos acessar valores rapidamente usando uma chave específica.
        </p>
        <p>
          O Java oferece várias implementações de Map, sendo as mais comuns <strong>HashMap</strong>, <strong>TreeMap</strong> e <strong>LinkedHashMap</strong>.
        </p>
      </section>

      <section>
        <h2>Exemplo em Java - HashMap</h2>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`import java.util.HashMap;

HashMap<Integer, String> alunos = new HashMap<>();

// Adicionando elementos (chave, valor)
alunos.put(1, "Maria");
alunos.put(2, "João");
alunos.put(3, "Ana");

// Atualizando um valor
alunos.put(2, "João Pedro");

// Acessando um valor pela chave
System.out.println("Aluno com chave 2: " + alunos.get(2)); // João Pedro

// Percorrendo o HashMap
for (Map.Entry<Integer, String> entry : alunos.entrySet()) {
    System.out.println("Chave: " + entry.getKey() + ", Valor: " + entry.getValue());
}

// Removendo elemento
alunos.remove(3);
System.out.println("HashMap após remoção: " + alunos);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>TreeMap e LinkedHashMap</h2>
        <p>
          Além do <strong>HashMap</strong>, temos outras implementações de Map:
        </p>
        <ul>
          <li><strong>TreeMap:</strong> mantém as chaves ordenadas de forma crescente.</li>
          <li><strong>LinkedHashMap:</strong> mantém a ordem de inserção dos elementos.</li>
        </ul>
        <p>
          Exemplo de TreeMap:
        </p>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`import java.util.TreeMap;

TreeMap<Integer, String> alunosTree = new TreeMap<>();
alunosTree.put(3, "Ana");
alunosTree.put(1, "Maria");
alunosTree.put(2, "João");

// Ao percorrer, a ordem das chaves será: 1, 2, 3
for (Map.Entry<Integer, String> entry : alunosTree.entrySet()) {
    System.out.println("Chave: " + entry.getKey() + ", Valor: " + entry.getValue());
}`} 
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Dicas de uso de Mapas</h2>
        <ul>
          <li>Use <strong>HashMap</strong> quando não precisar de ordem e quiser acesso rápido.</li>
          <li>Use <strong>TreeMap</strong> quando precisar das chaves ordenadas.</li>
          <li>Use <strong>LinkedHashMap</strong> quando quiser preservar a ordem de inserção.</li>
          <li>Evite usar tipos mutáveis como chave.</li>
        </ul>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie um <strong>HashMap</strong> que associe números de matrícula a nomes de alunos. Adicione 5 alunos e exiba todos usando entrySet().
          </li>
          <li>
            Substitua o nome de um aluno no HashMap e verifique a atualização.
          </li>
          <li>
            Crie um <strong>TreeMap</strong> com nomes de produtos e seus preços. Percorra o TreeMap e exiba os produtos em ordem crescente de nome.
          </li>
          <li>
            Compare o comportamento de HashMap, TreeMap e LinkedHashMap usando o mesmo conjunto de dados e explique a diferença observada.
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

export default Capitulo7;
