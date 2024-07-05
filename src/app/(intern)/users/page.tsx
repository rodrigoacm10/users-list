import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UsersList from "@/app/components/usuario/UsersList";
import { IconUser } from "@tabler/icons-react";

export default function PageUser() {
  return (
    <Page>
      <Title Icon={IconUser} main="Users" secundary="Register User" />
      <UsersList />{" "}
    </Page>
  );
}
