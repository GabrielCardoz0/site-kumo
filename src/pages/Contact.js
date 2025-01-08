import { FaFacebook, FaInstagram } from "react-icons/fa";
import Banner from "../components/Banner";
import Line from "../components/Line";
import Button from "../components/Button";
import { useEffect } from "react";
import { emailTemplate, redirectToInstagram, redirectToWhatsapp } from "../utils";
import { toast } from "react-toastify";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleSendEmail(e) {
    e.preventDefault();

    const nome = e.target[0].value;
    const email = e.target[1].value;
    const telefone = e.target[2].value;
    const mensagem = e.target[3].value;

    const html = emailTemplate({  nome, email, telefone, mensagem })

    const res = await fetch(process.env.REACT_APP_SENDMAIL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.REACT_APP_SENDMAIL_TOKEN,
      },
      body: JSON.stringify({
        email: process.env.REACT_APP_RECEIVER_EMAIL_CONTACT,
        subject: "Nova mensagem de contato",
        html: html.toString(),
      })
    });

    res.json().then(data => {
      toast.success('Mensagem enviada com sucesso!');
    }).catch(err => {
      toast.error('Erro ao enviar mensagem, tente novamente mais tarde.');
    });

    e.target.reset();
  }

  return (
    <div className="flex flex-col items-center gap-10 only-fade-in-up">

      <div className="w-full">
        <Banner title="Contato" showlogo={false} />
      </div>

      <div className="flex gap-20 px-8 md:px-0 max-w-6xl w-full justify-between flex-col md:flex-row">
        <div className="max-w-xl flex flex-col gap-8">
          <div>
            <h1 className="w-full text-4xl text-gray-700 mb-2">Entre em contato conosco</h1>
            <h2 className="w-full text-gray-700">Preencha o formulário abaixo que retornaremos assim que possível. Se preferir, entre em contato pelo whatsapp.</h2>
          </div>

          <form className="flex flex-col gap-4 w-full" onSubmit={handleSendEmail}>
            <input type="text" placeholder="Nome" className="border-[1px] border-gray-200 p-2 rounded" />
            <input type="email" placeholder="Email" className="border-[1px] border-gray-200 p-2 rounded" />
            <input type="telefone" placeholder="Telefone" className="border-[1px] border-gray-200 p-2 rounded" />
            <textarea placeholder="Mensagem" className="border-[1px] border-gray-200 p-2 rounded h-[150px]" />
            <Button className="bg-orange-500 text-white p-2 rounded font-medium">Enviar</Button>
          </form>
        </div>

        <div className="border-[1px] border-gray-200 py-4 px-8 flex flex-col gap-4 items-center text-gray-700 mb-auto">
          <div className="py-2">
            <p
            onClick={() => redirectToWhatsapp()}
            ><span className="text-gray-500 text-sm">Whatsapp:</span> <span className="underline cursor-pointer">(11) 98944-2271</span></p>
            <p><span className="text-gray-500 text-sm">Email:</span> contato@kumotecnologia.com</p>
          </div>

          <Line />

          <div className="py-2 text-center">
            <h1>Horário de atendimento:</h1>
            <p>Segunda a Sexta das 9h às 18h</p>
          </div>

          <Line />

          <div className="py-2 text-center">
            <p className="mb-2">Nos siga nas redes sociais: </p>
            <div className="flex gap-4 justify-center">
              <FaInstagram size={24} onClick={redirectToInstagram} className="cursor-pointer" />
              {/* <FaFacebook size={24} /> */}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};
