package br.edu.ifms.ws.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class ArquivoUtil {

	public static byte[] deArquivoParaByteArray(File file) {
		try {
			byte[] bFile = new byte[(int) file.length()];
			FileInputStream fileInputStream = new FileInputStream(file);
			fileInputStream.read(bFile);
			fileInputStream.close();
			return bFile;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static File deByteArrayParaArquivoTemporario(byte[] byteArray, String fileName) {
		try {
			File file = File.createTempFile(fileName, "");
			FileOutputStream fileOuputStream = new FileOutputStream(file);
			fileOuputStream.write(byteArray);
			fileOuputStream.close();
			return file;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
