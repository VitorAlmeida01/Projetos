import 'dart:convert';
import 'package:flutter/material.dart';
import 'detailed.dart';
import 'styles/atr_colors.dart';
import 'package:http/http.dart' as http;

// Exemplo para testes - email: tatiana@uscsonline.com.br senha: senhaAS034
class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final usernameController = TextEditingController();
  final passwordController = TextEditingController();

  Future<User> handleLogin(String email, String password) async {
    final response = await http.post(
      Uri.parse('https://atr-zq8v.onrender.com/login'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': email,
        'senha': password,
      }),
    );

    final user = User.fromJson(jsonDecode(response.body));

    return user;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 20),
              child: Image.asset('assets/images/logoATR.png',
                  height: 150, width: 150),
            ), // Adicione a imagem aqui
            Padding(
              padding: const EdgeInsets.only(bottom: 10.0),
              child: TextField(
                controller: usernameController,
                decoration: InputDecoration(
                  hintText: 'Usuário',
                  prefixIcon: const Icon(Icons.login),
                  filled: true,
                  fillColor: Colors.white.withOpacity(0.5),
                ),
              ),
            ), // Adicione o espaçamento aqui
            Padding(
              padding: const EdgeInsets.only(bottom: 10.0),
              child: TextField(
                controller: passwordController,
                decoration: InputDecoration(
                  hintText: 'Senha',
                  prefixIcon: const Icon(Icons.lock),
                  filled: true,
                  fillColor: Colors.white.withOpacity(0.5),
                ),
              ),
            ),

            SizedBox(
              width: 250,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: ElevatedButton(
                  onPressed: () async {
                    final data = await handleLogin(
                        usernameController.text, passwordController.text);
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => SecondRoute(
                            user: data // Passando os dados para SecondRout e
                            ),
                      ),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: atrColors.btnColor,
                  ),
                  child: const Wrap(
                    children: [
                      Text(
                        'Login',
                        style: TextStyle(color: Colors.white),
                      ),
                      Icon(
                        Icons.login,
                        color: Colors.white,
                      ),
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(
              height: 60,
            ),
          ],
        ),
      ),
    );
  }
}
