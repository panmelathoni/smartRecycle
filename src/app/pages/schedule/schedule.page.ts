import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  public coletaPortaPorta = [
    {
      dia: "Segunda",
      tipo: "Todos os Materiais",
      horarioProgramado: "15:00"
    },
    {
      dia: "Terça",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Quarta",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Quinta",
      tipo: "Todos os Materiais",
      horarioProgramado: "08:00"
    },
    {
      dia: "Sexta",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Sábado",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Domingo",
      tipo: "Vidros",
      horarioProgramado: "11:00"
    },
  ]

  public coletaEcoPontos = [
    {
      dia: "Segunda",
      tipo: "Todos os Materiais",
      horarioProgramado: "23:00"
    },
    {
      dia: "Terça",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Quarta",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Quinta",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Sexta",
      tipo: "Todos os Materiais",
      horarioProgramado: "23:00"
    },
    {
      dia: "Sábado",
      tipo: "",
      horarioProgramado: ""
    },
    {
      dia: "Domingo",
      tipo: "",
      horarioProgramado: ""
    },
  ]

  constructor() { }

  ngOnInit() {
  }
}
