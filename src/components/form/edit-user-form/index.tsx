import { Form } from "antd";
import InputEmail from "../../input/inputEmail";
type FormProps = {
  className?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChangeInputEmail: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputName: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputTel: React.ChangeEventHandler<HTMLInputElement>;
  onChangeSelectPosition: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeInputPassword: React.ChangeEventHandler<HTMLInputElement>;
  valueInputEmail?: string;
  valueInputName?: string;
  valueInputeTel?: string;
  valueSelectPosition: string;
  valueInputPassword: string;
  onClickButton: React.MouseEventHandler<HTMLButtonElement> | any;

  loading: any;
};
export default function EditForm({
  className,
  onSubmit,
  onChangeInputEmail,
  onChangeInputName,
  onChangeInputTel,
  onChangeSelectPosition,
  onChangeInputPassword,
  onClickButton,
  valueInputEmail,
  valueInputName,
  valueInputeTel,
  valueSelectPosition,
  valueInputPassword,
  loading,

}: FormProps) {
  return <form className={`${className}`} {...{}}>
    <aside><div>asdwd</div></aside>
  </form>;
}
