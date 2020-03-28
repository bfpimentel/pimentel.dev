import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ImageButton extends StatelessWidget {
  const ImageButton({
    @required final this.assetName,
    final this.urlAddress,
    final this.mailAddress,
  });

  final String assetName;
  final String urlAddress;
  final String mailAddress;

  _handleOnPressed() async {
    if (urlAddress != null && await canLaunch(urlAddress)) {
      await launch(urlAddress);
      return;
    }

    if (mailAddress != null) {
      final subject = 'Hello, Bruno!';
      final address = 'mailto:$mailAddress?subject=$subject';
      if (await canLaunch(address)) {
        await launch(address);
      }
    }
  }

  @override
  Widget build(final BuildContext context) {
    return SizedBox(
      width: 40,
      height: 40,
      child: FloatingActionButton(
        onPressed: _handleOnPressed,
        child: Container(
          width: 24,
          height: 24,
          decoration: BoxDecoration(
            image: DecorationImage(
              image: ExactAssetImage(assetName),
            ),
          ),
        ),
      ),
    );
  }
}