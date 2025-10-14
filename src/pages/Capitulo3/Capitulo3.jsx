import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Quiz from "../../components/Quiz/Quiz";
import "./Capitulo3.css";

function Capitulo3() {
  const questions = [
    {
      question: "Qual modificador de acesso permite que um atributo seja acessado apenas dentro da própria classe?",
      options: ["private", "public", "protected"],
      correct: "private",
    },
    {
      question: "Para acessar um atributo private fora da classe, você deve usar:",
      options: ["getter", "construtor", "atributo direto"],
      correct: "getter",
    },
    {
      question: "Um setter serve para:",
      options: ["Definir valores para atributos privados", "Ler valores de atributos privados", "Criar métodos públicos"],
      correct: "Definir valores para atributos privados",
    },
    {
      question: "O encapsulamento ajuda a:",
      options: ["Proteger dados e controlar o acesso", "Aumentar o tamanho do código", "Evitar o uso de métodos"],
      correct: "Proteger dados e controlar o acesso",
    }
  ];

  return (
    <div className="page capitulo3">
      <h1>Capítulo 3: Encapsulamento e Modificadores de Acesso</h1>

      <section>
        <h2>O que é Encapsulamento?</h2>
        <p>
          O <strong>encapsulamento</strong> é um dos pilares da Programação Orientada a Objetos (POO) e consiste em <strong>proteger os dados internos de uma classe</strong>, escondendo-os do acesso direto externo e permitindo que apenas métodos controlados possam manipular esses dados.
        </p>
        <p>
          Esse princípio ajuda a manter a integridade do objeto, evitando que valores inválidos sejam atribuídos e facilitando a manutenção e evolução do código.
        </p>
        <p>
          Para implementar o encapsulamento em Java, utilizamos <strong>modificadores de acesso</strong> como:
        </p>
        <ul>
          <li><code>private</code>: o atributo ou método só pode ser acessado dentro da própria classe.</li>
          <li><code>public</code>: o atributo ou método pode ser acessado de qualquer lugar do programa.</li>
          <li><code>protected</code>: o atributo ou método pode ser acessado dentro do mesmo pacote e por classes filhas (herança).</li>
        </ul>
        <p>
          Para permitir acesso controlado a atributos privados, usamos <strong>getters</strong> (para ler valores) e <strong>setters</strong> (para modificar valores), garantindo que qualquer validação ou regra de negócio seja aplicada.
        </p>
      </section>

      <section>
        <h2>Exemplo em Java - Aluno com Encapsulamento</h2>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`public class Aluno {
    // Atributos privados: só podem ser acessados dentro da classe
    private String nome;
    private double nota;

    // Construtor: inicializa os atributos do objeto
    public Aluno(String nome, double nota) {
        this.nome = nome;
        this.nota = nota;
    }

    // Getter para nome: permite ler o valor de nome de forma controlada
    public String getNome() {
        return nome;
    }

    // Setter para nome: permite alterar o nome, podendo adicionar validações se necessário
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Getter para nota: permite ler o valor da nota
    public double getNota() {
        return nota;
    }

    // Setter para nota: valida se a nota está dentro de um intervalo permitido
    public void setNota(double nota) {
        if (nota >= 0 && nota <= 10) { // validação
            this.nota = nota;
        }
    }
}

// Criando um objeto da classe Aluno
Aluno aluno1 = new Aluno("Maria", 8.5);

// Acessando e alterando os atributos de forma controlada
System.out.println(aluno1.getNome()); // Saída: Maria
aluno1.setNota(9.0);                 // Atualiza a nota para 9.0
System.out.println(aluno1.getNota()); // Saída: 9.0`}
        </SyntaxHighlighter>
        <p>
          ✅ Observação: sem encapsulamento, qualquer parte do programa poderia alterar os atributos diretamente, correndo risco de inconsistência (ex.: nota negativa ou acima de 10). Com getters e setters, você garante que todas as alterações passam por validações.
        </p>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie uma classe <strong>ContaBancaria</strong> com atributos privados <em>titular</em> e <em>saldo</em>. Adicione getters e setters, garantindo que o saldo nunca fique negativo.
          </li>
          <li>
            Crie uma classe <strong>Produto</strong> com atributos privados <em>nome</em> e <em>preco</em>. Valide no setter que o preço não seja negativo e exiba mensagens de erro se houver valor inválido.
          </li>
          <li>
            Explique com suas palavras por que usar atributos <code>private</code> com getters e setters é mais seguro e flexível do que deixar tudo <code>public</code>.
          </li>
        </ol>
        <p className="note">
          ⚡ Dica: tente alterar atributos diretamente e depois usando getters/setters. Observe como o encapsulamento ajuda a controlar e proteger os dados.
        </p>
      </section>

      <section>
        <h2>Quiz - Teste seus conhecimentos</h2>
        <Quiz questions={questions} />
      </section>
    </div>
  );
}

export default Capitulo3;
