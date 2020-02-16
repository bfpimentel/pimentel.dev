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
      width: 32,
      height: 32,
      child: FlatButton(
        padding: EdgeInsets.all(0),
        onPressed: _handleOnPressed,
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(width: 0),
            shape: BoxShape.circle,
            image: DecorationImage(
              image: ExactAssetImage(assetName),
            ),
          ),
        ),
      ),
    );
  }
}
