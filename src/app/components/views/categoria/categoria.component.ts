import { Component, OnInit } from "@angular/core";
import { Categoria } from "./categoria.model";
import { CategoriaService } from "./categoria.service";

@Component({
  selector: "app-categoria",
  templateUrl: "./categoria.component.html",
  styleUrls: ["./categoria.component.css"],
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];

  displayedColumns: string[] = ["id", "nome", "descricao","livros", "acoes"];

  constructor(private service: CategoriaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta)
      this.categorias = resposta;
    });
  }
}
