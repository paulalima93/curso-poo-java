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
          O <strong>encapsulamento</strong> é o princípio de esconder os detalhes internos de uma classe, permitindo que o acesso aos atributos seja feito de forma controlada.
        </p>
        <p>
          Isso é feito utilizando <strong>modificadores de acesso</strong>: <code>private</code>, <code>public</code> e <code>protected</code>.
        </p>
      </section>

      <section>
        <h2>Exemplo em Java - Aluno com Encapsulamento</h2>
        <SyntaxHighlighter language="java" style={okaidia}>
          {`public class Aluno {
    // Atributos privados (somente acessíveis dentro da classe)
    private String nome;
    private double nota;

    // Construtor
    public Aluno(String nome, double nota) {
        this.nome = nome;
        this.nota = nota;
    }

    // Getter para o nome
    public String getNome() {
        return nome;
    }

    // Setter para o nome
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Getter para a nota
    public double getNota() {
        return nota;
    }

    // Setter para a nota
    public void setNota(double nota) {
        if (nota >= 0 && nota <= 10) { // validação
            this.nota = nota;
        }
    }
}

// Usando a classe Aluno
Aluno aluno1 = new Aluno("Maria", 8.5);

// Acessando os atributos de forma controlada
System.out.println(aluno1.getNome()); // Maria
aluno1.setNota(9.0); // Atualiza a nota
System.out.println(aluno1.getNota()); // 9.0`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Exercícios para praticar</h2>
        <ol>
          <li>
            Crie uma classe <strong>ContaBancaria</strong> com atributos privados <em>titular</em> e <em>saldo</em>. Adicione getters e setters.
          </li>
          <li>
            Crie uma classe <strong>Produto</strong> com atributos privados <em>nome</em> e <em>preco</em>. Valide no setter que o preço não seja negativo.
          </li>
          <li>
            Explique com suas palavras por que usar atributos private e getters/setters é melhor do que deixar tudo público.
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

export default Capitulo3;
