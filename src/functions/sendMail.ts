import { SendEmailCommand } from "@aws-sdk/client-ses"

export async function handler() {
  const sendEmailCommand = new SendEmailCommand({
    Source: 'contato@tobiasac.dev.br',
    ReplyToAddresses: ['suporte@tobiasac.dev.br', 'devteam@tobiasac.dev.br'],
    Destination: {
      ToAddresses: ['tobias.vida@live.com'],
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Seu produto chegou!'
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: 'Oi Tobias, acabamos de receber o seu pedido! Ele será enviado em breve.'
        },
        Html: {
          Charset: 'UTF-8',
          Data: '<h1> Oi Tobias </h1>, acabamos de receber o seu pedido! <strong>Ele será enviado em breve.</strong>'
        }
      }
    },
  })

  return {
    statusCode: 200,
  }
}
