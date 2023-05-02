import { Button, Form, Input } from "antd";
import layout from "antd/es/layout/layout";
import Container from "../../../components/containers";
import * as Api from "../../../service/Api/api";
import EditForm from "../../../components/form/edit-user-form";
import { useParams } from "react-router-dom";
const BASE_URL = "http://192.168.2.62:3001/";

export default function EditUser() {
  const { id } = useParams();

  return (
    <Container>
      <div className=" bg-slate-400">
        {id}
        <form>
          <div className="bg-red-400 grid ">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </Container>
  );
}
