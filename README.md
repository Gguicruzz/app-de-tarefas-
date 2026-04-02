# 📝 To-Do App com Node.js

Um projeto simples de lista de tarefas feito com Node.js, utilizando arquivos JSON para armazenar os dados.

---

## 🚀 Funcionalidades

* ➕ Adicionar tarefas
* 📋 Listar tarefas
* ❌ Remover tarefas
* 💾 Salvar tarefas em arquivo JSON

---

## 📁 Estrutura do Projeto

```
/todo-app
  ├── app.js
  └── tarefas.json
```

---

## ⚙️ Pré-requisitos

* Node.js instalado na máquina

---

## ▶️ Como executar

1. Abra o terminal na pasta do projeto
2. Execute os comandos abaixo:

---

## 📌 Comandos disponíveis

### ➕ Adicionar tarefa

```bash
node app.js add "Nome da tarefa"
```

---

### 📋 Listar tarefas

```bash
node app.js list
```

---

### ❌ Remover tarefa

```bash
node app.js remove 1
```

> ⚠️ O número representa a posição da tarefa na lista.

---

## 🧠 Como funciona

* As tarefas são armazenadas no arquivo `tarefas.json`
* O sistema lê e escreve nesse arquivo usando o módulo `fs`
* Os dados são convertidos entre objeto e JSON usando:

  * `JSON.parse` → JSON para objeto
  * `JSON.stringify` → objeto para JSON

---

## 📌 Exemplo de tarefas.json

```json
[
  {
    "nome": "Estudar Node"
  },
  {
    "nome": "Fazer exercício"
  }
]
```

---

## 🚀 Melhorias futuras

* ✅ Marcar tarefa como concluída
* 🗓️ Adicionar data
* 🔍 Buscar tarefas
* 🌐 Criar uma API com Express
* 💻 Criar interface web

---

## 📚 Objetivo

Este projeto foi criado para praticar conceitos básicos de:

* Node.js
* Manipulação de arquivos
* JSON
* Funções em JavaScript

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo.
Nome: Guilherme cruz alves 
