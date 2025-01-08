export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function redirectToWhatsapp(message = "Olá, eu gostaria de saber mais sobre os serviços!") {
  window.open('https://wa.me/5511989442271?text='+message, '_blank');
}

export function redirectToInstagram() {
  window.open('https://www.instagram.com/kumotecnologia/', '_blank');
}

export const emailTemplate = ({ nome, email, telefone, mensagem }) =>  `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mensagem de Contato</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 10px 0;
      border-bottom: 1px solid #dddddd;
    }
    .content {
      padding: 20px 0;
    }
    .footer {
      text-align: center;
      padding: 10px 0;
      border-top: 1px solid #dddddd;
      font-size: 12px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova Mensagem de Contato</h1>
    </div>
    <div class="content">
      <p><strong>Nome:</strong> {${nome}}</p>
      <p><strong>Email:</strong> {${email}}</p>
      <p><strong>Telefone:</strong> {${telefone}}</p>
      <p><strong>Mensagem:</strong></p>
      <p>{${mensagem}}</p>
    </div>
    <div class="footer">
      <p>Esta é uma mensagem automática, por favor, não responda.</p>
    </div>
  </div>
</body>
</html>
`