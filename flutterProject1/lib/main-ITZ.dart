import 'package:flutter/material.dart';
import 'login.dart';
import 'styles/atr_colors.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          fontFamily: 'Roboto', scaffoldBackgroundColor: atrColors.primary),
      home: LoginPage(),
    );
  }
}
