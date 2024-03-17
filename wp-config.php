<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'la_casa_del_tapicero' );

/** Database username */
define( 'DB_USER', 'eric' );

/** Database password */
define( 'DB_PASSWORD', '1234' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?[e0#5=`dCg]hdgR;8Pp9Sp<5d}`qAHCnDK#c9{Znpp*q[#KS|IPJl_Mpfg5o`w1' );
define( 'SECURE_AUTH_KEY',  ';xKaQ{`:i=,D-Jny~k%2GV?*#HHp&{Y}EV7_3Ar?on(HpviVs]J6PcD{9hdvP9r.' );
define( 'LOGGED_IN_KEY',    '78w0pEh{mW+L2I%iMbQPbR][)+RH8[Nec#(c#twE^tgV{$*9)Ua|!M! J*Dh{79i' );
define( 'NONCE_KEY',        '+Tw JVPDm*lQ05Iwo1XfA*&v+FB*bh89]ruaDUR+v$Fu4k?V-(R}i3+T%s:9|ZKm' );
define( 'AUTH_SALT',        't[^Tl;*uwj.d&tb,+=Mm$(LX/cC+r3Z@V&~q#D7FP2i~3+Y=luaPlh+&fO-Z7]`2' );
define( 'SECURE_AUTH_SALT', '6hn|FuT;^uIDua#?/9vt$l|X/Mui}EX]6P)Zc^wE+6%H:A6{JH428$-/T-^Xn8WT' );
define( 'LOGGED_IN_SALT',   'XDfY^?B*`~fDWa[eH??XGfZ@Nr,S7c>NvDlPUq5k,>)yTWQRn;L/R}=9?%~,-mD;' );
define( 'NONCE_SALT',       'LiH(/*K~fpe^Z[x/%Q@s83dLiKh`3)w[FTw>@~H[FwjDBq#$0aIa,Dn2hbn{0kpp' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
