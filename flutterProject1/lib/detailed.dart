import './styles/atr_colors.dart';
import 'package:flutter/material.dart';

class User {
  final String emailinst;
  final String nome;
  final String senha;

  User({required this.emailinst, required this.senha, required this.nome});

// Define fromJson factory method
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      nome: json['nome'],
      emailinst: json['emailinst'],
      senha: json['senha'],
    );
  }
}

class SecondRoute extends StatelessWidget {
  final User user;
  const SecondRoute({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AutoTechRoll'),
        backgroundColor: atrColors.btnColor,
      ),
      body: Center(
        child: Text(
          user.nome,
          style: const TextStyle(fontSize: 20.0),
        ),
      ),
    );
  }
}
