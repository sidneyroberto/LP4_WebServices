package br.edu.ifms.ws.util;

import java.security.MessageDigest;

public class StringUtil {

	private StringUtil() {
	}

	private static final char[] HEX_CODE = "0123456789ABCDEF".toCharArray();

	public static String gerarHashMD5(byte[] bytes) {
		try {
			String str = criaStringHexadecimal(bytes);
			MessageDigest m = MessageDigest.getInstance("MD5");
			m.update(str.getBytes("UTF8"));
			byte s[] = m.digest();
			String result = "";
			for (int i = 0; i < s.length; i++) {
				result += Integer.toHexString((0x000000ff & s[i]) | 0xffffff00).substring(6);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	private static String criaStringHexadecimal(byte[] data) {
		StringBuilder r = new StringBuilder(data.length * 2);
		for (byte b : data) {
			r.append(HEX_CODE[(b >> 4) & 0xF]);
			r.append(HEX_CODE[(b & 0xF)]);
		}
		return r.toString();
	}
}
