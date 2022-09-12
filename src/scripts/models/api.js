import {
    Toast
} from "../tostify.js"

export class Api {
    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("S7-02: token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    //rotas sem token

    //cadastrar usuário
    static async cadastrarUsuario(data) {
        const array = await fetch(`${this.baseUrl}/auth/register/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                Toast.create("Cadastro bem sucedido!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });
        return array
    }

    //fazer login
    static async login(body) {

        const userLogin = await fetch(`${this.baseUrl}/auth/login`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            .then(res => res.json())
            .then(res => {
                localStorage.setItem("S7-02: userId", res.uuid)
                localStorage.setItem("S7-02: token", res.token || '')
                Toast.create("Login realizado com sucesso!", "#008000")
                return res
            })

            .catch(err => console.log(err))
        return userLogin
    }

    //puxar lista de empresas
    static async getCompanies() {
        const companies = await fetch(`${this.baseUrl}/companies`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(res => res.json())
            .catch(err => console.log(err))

        return companies
    }

    //empresa por setor
    static async getCompaniesSector(setor) {
        //setor = letra maiúscula/sem acento
        const companieSection = await fetch(`${this.baseUrl}/companies/${setor}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(res => res.json())
            .catch(err => console.log(err))

        return companieSection
    }

    //funcionarios

    //informações do usuário logado
    static async getUsersProfile() {
        const user = await fetch(`${this.baseUrl}/users/profile`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))

        return user
    }

    //listar todos os funcionarios do mesmo departamento do usuario logado // passar algo específico?
    static async getUsersByDepartament() {
        const posts = await fetch(`${this.baseUrl}/users/departaments/coworkers`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))

        return posts
    }

    //listar os departamentos da empresa do usuario logado
    static async getUsersByDepartament() {
        const departaments = await fetch(`${this.baseUrl}/users/departaments`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))

        return departaments
    }

    //atualizar informações do usuario logado
    static async updateUserInfo(data) {
        const array = await fetch(`${this.baseUrl}/users`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                Toast.create("Informações atualizadas com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });
        return array
    }

    //Admin

    //Rota para listar todos os usuários (admin e funcionários) cadastrados no sistema
    static async getUsers() {
        const users = await fetch(`${this.baseUrl}/users`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))
        return users
    }

    //listar os usuários sem departamento
    static async getUsersAll() {
        const users = await fetch(`${this.baseUrl}/admin/out_of_work`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

        console.log(users)
        return users
    }

    //atualizar informações do funcionario
    static async updateEmployeeInfo(userId) {
        const array = await fetch(`${this.baseUrl}/admin/update_user/${userId}`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                Toast.create("Informações atualizadas com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });
        return array
    }

    //deletar usuário
    static async deleteUser(userId) {
        const user = await fetch(`${this.baseUrl}/admin/delete_user/${userId}`, {
                method: "DELETE",
                headers: this.headers,
            })

            .then(res => res.json())
            .then((res) => {
                Toast.create("Usuário deletado com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });

        console.log(user)
        return user
    }

    //cadastrar empresa
    static async createCompanies(body) {
        const newCompanie = await fetch(`${this.baseUrl}/companies`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(body)
            })

            .then(res => res.json())
            .then((res) => {
                Toast.create("Empresa criada com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });

        return newCompanie
    }

    // Rota para listar todos os setores
    static async getSectorsAll() {
        const sectors = await fetch(`${this.baseUrl}/sectors`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))

        return sectors
    }

    // Rota para listar todos os departamentos 
    static async getAllDepartments() {
        const departments = await fetch(`${this.baseUrl}/departments`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))

        return departments
    }

    // Listar todos os departamentos de uma empresa 
    static async getAllCompanieDepartments(idEmpresa) {
        const departments = await fetch(`${this.baseUrl}/departments/${idEmpresa}`, {
                method: "GET",
                headers: this.headers,
            })

            .then(res => res.json())
            .catch(err => console.log(err))

        return departments
    }

    // Rota para criar departamentos
    static async createDepartments(body) {
        const departments = await fetch(`${this.baseUrl}/departments`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(body)
            })

            .then(res => res.json())
            .then((res) => {
                Toast.create("Departamento criado com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });

        return departments
    }

    // Rota para contratar um funcionário para um departamento da empresa 
    static async hireDepartmentEmployee(data) {
        const array = await fetch(`${this.baseUrl}/departments/hire/`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                Toast.create("Colaborador contratado!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });
        return array
    }

    // Rota para demitir um funcionário de um departamento 
    static async quitEmployee(userId) {
        const array = await fetch(`${this.baseUrl}/departments/dismiss/${userId}`, {
                method: "PATCH",
                headers: this.headers,
            })
            .then(res => res.json())
            .then((res) => {
                Toast.create("Colaborador desligado", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });
        return array
    }

    // Rota para editar a descrição de um departamento
    static async editDepDescription(depId, data) {
        const array = await fetch(`${this.baseUrl}/departments/${depId}`, {
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((res) => {
                Toast.create("Editado com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });
        return array
    }

    // deletar departamento /departments/uuiddepartamento
    static async deleteDepartment(depId) {
        const user = await fetch(`${this.baseUrl}/departments/${depId}`, {
                method: "DELETE",
                headers: this.headers,
            })

            .then(res => res.json())
            .then((res) => {
                Toast.create("Deletado com sucesso!", "#008000")
            })
            .catch((err) => {
                Toast.create(err, "#ff0000")
            });

        console.log(user)
        return user
    }
}