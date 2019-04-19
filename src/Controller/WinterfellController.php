<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 11/10/17
 * Time: 16:07
 * PHP version 7
 */

namespace App\Controller;

use App\Model\WinterfellManager;

/**
 * Class WinterfellController
 *
 */
class WinterfellController extends AbstractController
{


    /**
     * Display winterfell listing
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index()
    {
        return $this->twig->render('Winterfell/index.html.twig');
    }
}
